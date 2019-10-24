package com.example.demo.controller;

import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;

import com.example.demo.service.MemberService;

import lombok.extern.slf4j.Slf4j;

/**부트스트랩 typeahead 기능을 테스트하기 위한 프로젝트의 컨트롤러
 * @author minhj
 *
 */
@Slf4j
@Controller
public class MemberController {

	@Autowired
	private MemberService memberService;
	
	@RequestMapping("/welcome")
	public String showWelcome() {
		return "welcome";
	}
	
	@RequestMapping("/typeahead")
	public String showAutoComplete() {
		return "typeahead";
	}
	
	/**Ajax 통신을 통해 입력받은 keyword와 유사한 아이디를 DB에서 검색하여 List 타입으로 리턴 
	 * @param jsMap
	 * @param model
	 * @return
	 */
	@ResponseBody
	@RequestMapping(value = "/getmemberid", method = RequestMethod.GET)
//	public List<String> getMemberId(@RequestBody Map<String, Object> jsMap, Model model) {
	public List<String> getMemberId(String value, Model model) {	
		List<String> resultList = null;
		//String keyword = jsMap.get("keyword") + "";
		
		try {
			//resultList = memberService.getUserid(keyword);			
			resultList = memberService.getUserid(value);
		} catch (Exception e) {
			
		}		
		
		return resultList;
	}
}
