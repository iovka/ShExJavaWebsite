package fr.inria.shexjavaweb;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;

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