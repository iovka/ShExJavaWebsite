package fr.inria.shexjavaweb;

public class ResultEntry {
	private String node;
	private String shapeLabel;
	private Boolean result=null;
	private String message="";
	
	public ResultEntry(String node, String shapeLabel) {
		super();
		this.node = node;
		this.shapeLabel = shapeLabel;
	}

	public String getNode() {
		return node;
	}

	public void setNode(String node) {
		this.node = node;
	}

	public String getShapeLabel() {
		return shapeLabel;
	}

	public void setShapeLabel(String shapeLabel) {
		this.shapeLabel = shapeLabel;
	}

	public boolean isResult() {
		return result;
	}

	public void setResult(boolean result) {
		this.result = result;
	}

	public String getMessage() {
		return message;
	}

	public void setMessage(String message) {
		this.message = message;
	}

}
