package com.coll.OnlineCollaborate.model;

public class DomainResponse {

	int reponseCode;
	String responseMessage;
	public DomainResponse() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	public DomainResponse(int reponseCode, String responseMessage) {
		super();
		this.reponseCode = reponseCode;
		this.responseMessage = responseMessage;
	}

	public int getReponseCode() {
		return reponseCode;
	}

	public void setReponseCode(int reponseCode) {
		this.reponseCode = reponseCode;
	}

	public String getResponseMessage() {
		return responseMessage;
	}

	public void setResponseMessage(String responseMessage) {
		this.responseMessage = responseMessage;
	}
	
	
}
