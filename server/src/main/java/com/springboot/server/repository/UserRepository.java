package com.springboot.server.repository;

import java.util.List;
import org.springframework.data.jpa.repository.JpaRepository;
import com.springboot.server.model.User;
public interface UserRepository extends JpaRepository<User, Long> {
    List<User> findByUserType(int user_type);
    List<User> findByFirstNameContaining(String first_name);
}