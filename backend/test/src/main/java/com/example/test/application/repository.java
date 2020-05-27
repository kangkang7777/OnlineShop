package com.example.test.application;
import com.example.test.entity.User;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

public interface repository{
    User getUserByAccount(String account);
    void addUser(String account, String password);
    void addCart(String account,int num);
    void checkOut(String account);
    List<List<Integer>> getOrder(String account);
}
