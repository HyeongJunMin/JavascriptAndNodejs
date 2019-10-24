package com.example.demo.model;

import lombok.ToString;

import lombok.Setter;

import lombok.Getter;

@Getter
@Setter
@ToString
public class MemberDTO {
	
	private String userid;
	private String pw;
	
	public MemberDTO() { }

	public MemberDTO(String userid, String pw) {
		this.userid = userid;
		this.pw = pw;
	}
}
