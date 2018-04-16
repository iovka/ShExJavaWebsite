package fr.inria.shexjavaweb;

import java.io.ByteArrayInputStream;
import java.io.InputStream;
import java.nio.charset.StandardCharsets;
import java.util.List;

import org.eclipse.rdf4j.model.IRI;
import org.eclipse.rdf4j.model.Model;
import org.eclipse.rdf4j.model.impl.SimpleValueFactory;
import org.eclipse.rdf4j.rio.RDFFormat;
import org.eclipse.rdf4j.rio.Rio;

import fr.univLille.cristal.shex.graph.NeighborTriple;
import fr.univLille.cristal.shex.graph.RDF4JGraph;
import fr.univLille.cristal.shex.graph.RDFGraph;
import fr.univLille.cristal.shex.schema.Label;
import fr.univLille.cristal.shex.schema.ShexSchema;
import fr.univLille.cristal.shex.schema.parsing.ShExCParser;
import fr.univLille.cristal.shex.schema.parsing.ShExJParser;
import fr.univLille.cristal.shex.schema.parsing.ShExRParser;
import fr.univLille.cristal.shex.util.Pair;
import fr.univLille.cristal.shex.validation.RecursiveValidation;
import fr.univLille.cristal.shex.validation.ValidationAlgorithm;

public class RequestResult {
	private String result=null;
	private List<Pair<NeighborTriple, Label>> matching=null;
		
	public RequestResult() {
		super();
	}
	
	public RequestResult(RequestValidation validation) {
		super();
		ShexSchema schema = parseShexSchema(validation);
		if (schema!=null) {
			RDFGraph graph = parseRDFGraph(validation);
			if (graph != null) {
				try  {
					IRI focusNode = SimpleValueFactory.getInstance().createIRI(validation.getNode()); 
					Label shapeLabel = new Label(SimpleValueFactory.getInstance().createIRI(validation.getShape())); 
	
					ValidationAlgorithm valAlgo = new RecursiveValidation(schema, graph);
					if (valAlgo.validate(focusNode, shapeLabel))
						this.result = "Success: "+focusNode+" has shape "+shapeLabel;
					else
						this.result = "Failure: "+focusNode+" does not have shape "+shapeLabel;
					//matching = valAlgo.getTyping().getMatch(focusNode, shapeLabel);
				}catch (Exception e) {
					this.result = e.getMessage();
				}
			}
		}
	}

	public String getResult() {
		return result;
	}

	public void setResult(String result) {
		this.result = result;
	}
	
	public List<Pair<NeighborTriple, Label>> getMatching() {
		return matching;
	}

	public void setMatching(List<Pair<NeighborTriple, Label>> matching) {
		this.matching = matching;
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
			result = e.toString();
			result +=": "+e.getMessage();
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
			result = e.getMessage();
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
