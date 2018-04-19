package fr.inria.shexjavaweb;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;

import org.eclipse.rdf4j.model.IRI;
import org.eclipse.rdf4j.model.Model;
import org.eclipse.rdf4j.model.impl.SimpleValueFactory;
import org.eclipse.rdf4j.rio.RDFFormat;
import org.eclipse.rdf4j.rio.Rio;

import fr.univLille.cristal.shex.graph.RDF4JGraph;
import fr.univLille.cristal.shex.graph.RDFGraph;
import fr.univLille.cristal.shex.schema.Label;
import fr.univLille.cristal.shex.schema.ShexSchema;
import fr.univLille.cristal.shex.schema.parsing.ShExCParser;
import fr.univLille.cristal.shex.schema.parsing.ShExJParser;
import fr.univLille.cristal.shex.schema.parsing.ShExRParser;
import fr.univLille.cristal.shex.validation.RecursiveValidation;
import fr.univLille.cristal.shex.validation.RefineValidation;
import fr.univLille.cristal.shex.validation.ValidationAlgorithm;

public class RequestResult {
	private List<ResultEntry> result=null;
	private String error = null;
		
	public RequestResult() {
		super();
	}
	
	public RequestResult(RequestValidation validation) {
		super();
		ShexSchema schema = parseShexSchema(validation);
		if (schema!=null) {
			RDFGraph graph = parseRDFGraph(validation);
			if (graph != null) {
				result = new ArrayList<>();
				if (validation.getAlgorithm().equals("recursive")) {
					ValidationAlgorithm valAlgo = new RecursiveValidation(schema, graph);
					ResultEntry res = new ResultEntry(validation.getNode(),validation.getShape());
					try  {
						IRI focusNode = SimpleValueFactory.getInstance().createIRI(validation.getNode()); 
						Label shapeLabel = new Label(SimpleValueFactory.getInstance().createIRI(validation.getShape())); 						
						res.setResult(valAlgo.validate(focusNode, shapeLabel));
					}catch (Exception e) {
						res.setMessage(e.getMessage());
					}
					result.add(res);
				}
				if (validation.getAlgorithm().equals("refine")) {
					ValidationAlgorithm valAlgo = new RefineValidation(schema, graph);
					//valAlgo.validate(null, null);					
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
			error = e.toString()+": "+e.getMessage();
			return null;
		}
		return schema;
	}
	
	private RDFGraph parseRDFGraph(RequestValidation validation) {
		RDFGraph graph = null;
		InputStream stream = new ByteArrayInputStream(validation.getData().getBytes(StandardCharsets.UTF_8));
		try {
			Model data = Rio.parse(stream, "http://a.example.shex/", RDFFormat.TURTLE);
			graph = new RDF4JGraph(data);
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
