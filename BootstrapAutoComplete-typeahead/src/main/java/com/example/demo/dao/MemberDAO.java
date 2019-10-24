package com.example.demo.dao;

import java.util.List;

import org.apache.ibatis.session.SqlSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

/**부트스트랩 typeahead 기능을 테스트하기 위한 프로젝트의 DAO
 * @author minhj
 *
 */
@Repository
public class MemberDAO {

	@Autowired
	private SqlSession sqlSession;
	
	private String ns = "member.";

	/** 매개변수로 받은 키워드와 매치(LIKE)하는 아이디 모두 리턴
	 * @param keyword
	 * @return
	 */
	public List<String> getUserid(String keyword){
		return sqlSession.selectList(ns + "getUserid", keyword);
	}
}
