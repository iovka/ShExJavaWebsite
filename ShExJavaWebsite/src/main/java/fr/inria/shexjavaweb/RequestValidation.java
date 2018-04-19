package fr.inria.shexjavaweb;

public class RequestValidation {
	private String schema="";
	private String schemaformat="";
	private String data="";
	private String dataformat="";
	private String algorithm="";
	private String node="";
	private String shape="";
	private String predefined="";
	
	public String getSchema() {
		return schema;
	}
	
	public void setSchema(String schema) {
		this.schema = schema;
	}
	
	public String getSchemaformat() {
		return schemaformat;
	}

	public void setSchemaformat(String schemaformat) {
		this.schemaformat = schemaformat;
	}

	public String getData() {
		return data;
	}
	
	public void setData(String data) {
		this.data = data;
	}
	
	public String getAlgorithm() {
		return algorithm;
	}

	public void setAlgorithm(String algorithm) {
		this.algorithm = algorithm;
	}

	public String getDataformat() {
		return dataformat;
	}

	public void setDataformat(String dataformat) {
		this.dataformat = dataformat;
	}

	public String getNode() {
		return node;
	}
	
	public void setNode(String node) {
		this.node = node;
	}
	
	public String getShape() {
		return shape;
	}
	
	public void setShape(String shape) {
		this.shape = shape;
	}

	public String getPredefined() {
		return predefined;
	}

	public void setPredefined(String predefined) {
		this.predefined = predefined;
	}

}
