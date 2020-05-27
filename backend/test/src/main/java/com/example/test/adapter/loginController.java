package com.example.test.adapter;

import com.example.test.application.application;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping(value="/login")
public class loginController {
    private application usersApplication;

    @Autowired
    public loginController(application usersApplication) {
        this.usersApplication = usersApplication;
    }

//    @PostMapping
//    public Map<String, Object> check(@RequestParam String account, @RequestParam String password){
//        Map<String, Object> map = new HashMap<>(3);
//        if (usersApplication.getUser(account)){
//            map.put("status", true);
//            return map;
//        }
//        else{
//            map.put("status", false);
//            return map;
//        }
//    }
    @GetMapping
    public boolean check(@RequestParam String account, @RequestParam String password)
    {
        return usersApplication.getUser(account);
    }
}
