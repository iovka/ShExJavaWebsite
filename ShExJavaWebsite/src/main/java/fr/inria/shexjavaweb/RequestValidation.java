package fr.inria.shexjavaweb;

public class RequestValidation {
	private String schema="";
	private String schemaformat="";
	private String data="";
	private String dataformat="";
	private String shapemap="";
	private String predefined="";
	private boolean positivedis=true;
	private boolean graphdis=false;
	
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
	
	public String getShapemap() {
		return shapemap;
	}

	public void setShapemap(String shapemap) {
		this.shapemap = shapemap;
	}

	public String getDataformat() {
		return dataformat;
	}

	public void setDataformat(String dataformat) {
		this.dataformat = dataformat;
	}

	public String getPredefined() {
		return predefined;
	}

	public void setPredefined(String predefined) {
		this.predefined = predefined;
	}

	public boolean getPositivedis() {
		return positivedis;
	}

	public void setPositivedis(boolean positivedis) {
		this.positivedis = positivedis;
	}

	public boolean getGraphdis() {
		return graphdis;
	}

	public void setGraphdis(boolean graphdis) {
		this.graphdis = graphdis;
	}


	
	
	
}
