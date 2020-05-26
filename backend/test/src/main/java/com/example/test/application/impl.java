package com.example.test.application;

import com.example.test.entity.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Component
@Repository
public class impl implements repository {

    @Autowired
    private repositor Repositor;

    @Override
    public User getUserByAccount(String account) {
        return Repositor.findUserByAccount(account);
    }

    @Override
    public void addUser(String account, String password) {
        User u = new User();
        u.setAccount(account);
        u.setPassword(password);
        Repositor.save(u);
    }

    @Override
    public void addCart(String account,int num) {
        User u = Repositor.findUserByAccount(account);
        List<Integer> temp = u.getCart();
        if(temp == null) {
            temp = new ArrayList<>();
            for(int i =0;i<7;i++)
                temp.set(i,0);
        }
        temp.set(num,temp.get(num)+1);
        u.setCart(temp);
        Repositor.save(u);
    }

    @Override
    public void checkOut(String account) {
        User u = Repositor.findUserByAccount(account);
        List<List<Integer>> temp = u.getOrder();
        temp.add(u.getCart());
        u.setOrder(temp);
        Repositor.save(u);
    }

    @Override
    public List<List<Integer>> getOrder(String account) {
        return Repositor.findUserByAccount(account).getOrder();
    }
}
