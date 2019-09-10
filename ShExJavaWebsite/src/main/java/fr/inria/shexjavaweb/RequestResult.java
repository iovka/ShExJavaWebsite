package fr.inria.shexjavaweb;

import java.io.ByteArrayInputStream;
import java.io.IOException;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.Iterator;
import java.util.List;

import org.apache.commons.rdf.api.Graph;
import org.apache.commons.rdf.api.IRI;
import org.apache.commons.rdf.api.RDFTerm;
import org.apache.commons.rdf.api.Triple;
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
import fr.inria.lille.shexjava.shapeMap.BaseShapeMap;
import fr.inria.lille.shexjava.shapeMap.ResultShapeMap;
import fr.inria.lille.shexjava.shapeMap.abstrsynt.ShapeAssociation;
import fr.inria.lille.shexjava.shapeMap.parsing.ShapeMapParsing;
import fr.inria.lille.shexjava.util.CommonGraph;
import fr.inria.lille.shexjava.util.Pair;
import fr.inria.lille.shexjava.validation.LocalMatching;
import fr.inria.lille.shexjava.validation.MatchingCollector;
import fr.inria.lille.shexjava.validation.RecursiveValidationWithMemorization;
import fr.inria.lille.shexjava.validation.RefineValidation;
import fr.inria.lille.shexjava.validation.ValidationAlgorithm;

public class RequestResult {
	private static RDF4J factory = (RDF4J) GlobalFactory.RDFFactory; 
	private static ShapeMapParsing shapeMapParser = new ShapeMapParsing();
	private String error = null;
	private List<ResultEntry> result=null;
	private List<TripleString> graphli=null;

	public RequestResult() {
		super();
	}
	
	public RequestResult(RequestValidation validation) {
		super();
		ShexSchema schema = parseShexSchema(validation);
		if (schema!=null) {
			Graph graph = parseRDFGraph(validation);
			if (graph != null) {
				try {
					result = new ArrayList<>();
					
					BaseShapeMap shapeMap = shapeMapParser.parse(new ByteArrayInputStream(validation.getShapemap().getBytes()));
					ValidationAlgorithm valAlgo = new RecursiveValidationWithMemorization(schema, graph);
					MatchingCollector fas = new MatchingCollector();
					valAlgo.addMatchingObserver(fas);
					
					ResultShapeMap results = valAlgo.validate(shapeMap);
//					for (ShapeAssociation association:results.getAssociations()) {
//						RDFTerm node = association.getNodeSelector().apply(graph).iterator().next();
//						Label label = association.getShapeSelector().apply(schema);
					for (Pair<RDFTerm,Label> association:valAlgo.getTyping().getStatusMap().keySet()) {
						RDFTerm node = association.one;
						Label label = association.two;
						
						ResultEntry tmp = new ResultEntry(node.toString(),label.toString());
						tmp.setResult(valAlgo.getTyping().isConformant(node,label));

						if (!tmp.isResult()) { 
							LocalMatching matching = fas.getMatching(node,label);
							if (matching != null) {
								if (matching.getUnmatched().size()>0)
									tmp.setMessage("Umatched triples: "+matching.getUnmatched());
								else
									tmp.setMessage("Matching not found.");
							}
						}
						if ((validation.getPositivedis() && tmp.isResult()) || !validation.getPositivedis())
							result.add(tmp);
					}
				} catch (IOException e) {
					error = e.toString();
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
	
	public List<TripleString> getGraphli() {
		return graphli;
	}

	public void setGraphli(List<TripleString> graphli) {
		this.graphli = graphli;
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
			if (validation.getGraphdis()) {
				this.graphli = new ArrayList<>();
				Iterator<Triple> iter = graph.iterate().iterator();
				while (iter.hasNext()) {
					Triple next = iter.next();
					graphli.add(new TripleString(next.getSubject().toString(),next.getPredicate().toString(), next.getObject().toString()));
				}
			}
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
