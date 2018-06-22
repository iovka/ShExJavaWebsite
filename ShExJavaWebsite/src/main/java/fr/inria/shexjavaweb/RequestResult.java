package fr.inria.shexjavaweb;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.rdf.api.Graph;
import org.apache.commons.rdf.api.IRI;
import org.apache.commons.rdf.api.RDFTerm;
import org.apache.commons.rdf.rdf4j.RDF4J;
import org.eclipse.rdf4j.model.Model;
import org.eclipse.rdf4j.rio.RDFFormat;
import org.eclipse.rdf4j.rio.Rio;

import fr.inria.lille.shexjava.GlobalFactory;
import fr.inria.lille.shexjava.schema.Label;
import fr.inria.lille.shexjava.schema.ShexSchema;
import fr.inria.lille.shexjava.schema.parsing.ShExCParser;
import fr.inria.lille.shexjava.schema.parsing.ShExJParser;
import fr.inria.lille.shexjava.schema.parsing.ShExRParser;
import fr.inria.lille.shexjava.util.CommonGraph;
import fr.inria.lille.shexjava.validation.FailureAnalyzerSimple;
import fr.inria.lille.shexjava.validation.RecursiveValidationWithMemorization;
import fr.inria.lille.shexjava.validation.RefineValidation;
import fr.inria.lille.shexjava.validation.ValidationAlgorithm;

public class RequestResult {
	private List<ResultEntry> result=null;
	private String error = null;
	private static RDF4J factory = (RDF4J) GlobalFactory.RDFFactory; 

	public RequestResult() {
		super();
	}
	
	public RequestResult(RequestValidation validation) {
		super();
		ShexSchema schema = parseShexSchema(validation);
		if (schema!=null) {
			Graph graph = parseRDFGraph(validation);
			if (graph != null) {
				result = new ArrayList<>();
				if (validation.getAlgorithm().equals("recursive")) {
					ValidationAlgorithm valAlgo = new RecursiveValidationWithMemorization(schema, graph);
					FailureAnalyzerSimple fas = new FailureAnalyzerSimple();
					valAlgo.addFailureReportsCollector(fas);
					ResultEntry res = new ResultEntry(validation.getNode(),validation.getShape());
					try  {
						IRI focusNode = factory.createIRI(validation.getNode()); 
						Label shapeLabel = new Label(factory.createIRI(validation.getShape()));
						boolean result = valAlgo.validate(focusNode, shapeLabel);
						res.setResult(result && fas.hasReport(focusNode, shapeLabel));
						if (!result && fas.hasReport(focusNode, shapeLabel))
							res.setMessage(fas.getReport(focusNode, shapeLabel).getMessage());
					}catch (Exception e) {
						res.setMessage(e.toString());
					}
					result.add(res);
				}
				if (validation.getAlgorithm().equals("refine")) {
					ValidationAlgorithm valAlgo = new RefineValidation(schema, graph);
					FailureAnalyzerSimple fas = new FailureAnalyzerSimple();
					valAlgo.addFailureReportsCollector(fas);
					try {
						valAlgo.validate(null, null);
					} catch (Exception e) {
						error = e.toString();
					}
					Iterator<RDFTerm> ite = CommonGraph.getAllNodes(graph).iterator();
					while (ite.hasNext()) {
						RDFTerm node = ite.next();
						for (Label l:schema.getRules().keySet()) {
							ResultEntry res = new ResultEntry(node.toString(),l.stringValue());
							try {
								boolean result = valAlgo.validate(node, l);
								res.setResult(result);
								if (!result && fas.hasReport(node, l))
									res.setMessage(fas.getReport(node, l).getMessage());
							} catch (Exception e) {
								res.setMessage(e.toString());
							}
							result.add(res);
						}
					}
				}
			}
		}
	}


	public String getError() {
		return error;
	}

	public void setError(String error) {
		this.error = error;
	}

	public List<ResultEntry> getResult() {
		return result;
	}

	
	public void setResult(List<ResultEntry> result) {
		this.result = result;
	}
	
	
	//-------------------------------
	// Utils
	//------------------------------

	private ShexSchema parseShexSchema(RequestValidation validation) {
		ShexSchema schema = null;
		try  {
			InputStream stream = new ByteArrayInputStream(validation.getSchema().getBytes(StandardCharsets.UTF_8));
			if (validation.getSchemaformat().equals("ShExC")) {
				ShExCParser parser = new ShExCParser();
				schema = new ShexSchema(parser.getRules(stream));
			}
			else if (validation.getSchemaformat().equals("ShExJ")) {
				ShExJParser parser = new ShExJParser();
				schema = new ShexSchema(parser.getRules(stream));
			} else {
				ShExRParser parser = new ShExRParser();
				schema = new ShexSchema(parser.getRules(stream,getRDFFormat(validation.getSchemaformat())));
			}
		} catch (Exception e) {
			error = e.toString();
			return null;
		}
		return schema;
	}
	
	private Graph parseRDFGraph(RequestValidation validation) {
		Graph graph = null;
		InputStream stream = new ByteArrayInputStream(validation.getData().getBytes(StandardCharsets.UTF_8));
		try {
			Model data = Rio.parse(stream, "http://a.example.shex/", RDFFormat.TURTLE);
			graph = factory.asGraph(data);
		} catch (Exception e) {
			error = e.getMessage();
		}
		return graph;
	}

	private RDFFormat getRDFFormat(String format) {
		if (format.indexOf("TURTLE")>0) return RDFFormat.TURTLE;
		if (format.indexOf("JSONLD")>0) return RDFFormat.JSONLD;
		if (format.indexOf("NTRIPLES")>0) return RDFFormat.NTRIPLES;
		if (format.indexOf("RDF/JSON")>0) return RDFFormat.RDFJSON;
		if (format.indexOf("RDF/XML")>0) return RDFFormat.RDFXML;
		if (format.indexOf("TRIG")>0) return RDFFormat.TRIG;
		return null;
		
	}
}
