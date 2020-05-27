package com.example.test.application;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
@Component
public class application {
    private repository Repository;

    @Autowired
    public application(repository userRepository){
        this.Repository = userRepository;
    }

    public boolean addUser(String account, String password){
        if (Repository.getUserByAccount(account) != null){
            return false;
        }
        Repository.addUser(account,password);
        return true;
    }

    public List<Integer> getCart(String account)
    {
        return Repository.getCart(account);
    }

    public boolean addCart(String account,int num)
    {
        Repository.addCart(account,num);
        return true;
    }

    public boolean checkOut(String account)
    {
        Repository.checkOut(account);
        return true;
    }

    public List<List<Integer>> getOrder(String account)
    {
        return Repository.getOrder(account);
    }

    public boolean getUser(String account)
    {
        return Repository.getUserByAccount(account) != null;
    }

}
