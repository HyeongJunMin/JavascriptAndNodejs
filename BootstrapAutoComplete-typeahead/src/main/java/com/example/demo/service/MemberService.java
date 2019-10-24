package com.example.demo.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.dao.MemberDAO;

/**부트스트랩 typeahead 기능을 테스트하기 위한 프로젝트의 서비스
 * @author minhj
 *
 */
@Service
public class MemberService {

	@Autowired
	private MemberDAO memberDAO;
	
	/** 매개변수로 받은 키워드와 매치(LIKE)하는 아이디 모두 리턴
	 * @param keyword
	 * @return
	 */
	public List<String> getUserid(String keyword){
		return memberDAO.getUserid(keyword);
	}
}
