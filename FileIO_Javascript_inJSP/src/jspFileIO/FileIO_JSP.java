package jspFileIO;

import java.io.BufferedReader;
import java.io.File;
import java.io.FileNotFoundException;
import java.io.FileReader;
import java.util.ArrayList;
import java.util.List;

public class FileIO_JSP {
	File f1 = new File("D:\\test\\springtest\\logtest\\test1.txt");
	BufferedReader br = null;
	List<String> lst = new ArrayList<String>();
	
	public String fileRead() {
		String result = "";
		try {
			br = new BufferedReader(new FileReader(f1));
			String str = null;
			while( (str = br.readLine()) != null ){
				result += str + "<br>";
			}
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (Exception ee) {
			// TODO Auto-generated catch block
			ee.printStackTrace();
		}
		return result;
	}
	
	public void getLog(String str) {
		System.out.println(str);
		
	}
}
