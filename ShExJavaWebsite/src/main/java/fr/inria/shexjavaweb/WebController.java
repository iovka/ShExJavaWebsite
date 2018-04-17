package fr.inria.shexjavaweb;

import javax.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

@Controller
public class WebController {

	@GetMapping("/")
    public String greeting(Model model) {
        return "index";
    }
	
	@GetMapping("/download")
    public String download(Model model) {
        return "download";
    }
	
	@GetMapping("/documentation")
    public String documentation(Model model) {
        return "documentation";
    }
	
	@GetMapping("/javadocs/**")
    public String javadocRoot(Model model,HttpServletRequest request) {
		String base = new String(request.getRequestURL());
		base = base.split("/javadocs/")[1];
        return "/javadocs/"+base;
    }
	
	@GetMapping("/demonstrator")
    public String demonstrator(Model model) {
		model.addAttribute("request",new RequestValidation());
		model.addAttribute("result",new RequestResult());
        return "demonstrator";
    }
	
	@PostMapping("/demonstrator")
    public String validate(@ModelAttribute RequestValidation validation, Model model) {
		model.addAttribute("request",validation);
		model.addAttribute("result", new RequestResult(validation));
        return "demonstrator";
    }

	@GetMapping("/about")
    public String about(Model model) {
        return "about";
    }
}