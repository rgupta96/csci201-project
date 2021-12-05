package com.springboot.server.model;
import java.util.Date;
import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "user_type")
    private int userType;
    
    @Column(name = "login_type")
    private int loginType;
    
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "date_created")
    private Date dateCreated;
    public User() {
    }
    public User(String first_name, String last_name, int user_type, int login_type, Date date_created) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.userType = user_type;
        this.loginType = login_type;
        this.dateCreated = date_created;
    }
    public String getFirstName() {
        return firstName;
    }
    public void setFirstName(String first_name) {
        this.firstName = first_name;
    }
    public String getLastName() {
        return lastName;
    }
    public void setLastName(String last_name) {
        this.lastName = last_name;
    }
    public int getUserType() {
        return userType;
    }
    public void setUserType(int user_type) {
        this.userType = user_type;
    }
    public int getLoginType() {
        return loginType;
    }
    public void setLoginType(int login_type) {
        this.loginType = login_type;
    }
    public Date getDateCreated() {
        return dateCreated;
    }
    public void setDateCreated(Date date_created) {
        this.dateCreated = date_created;
    }
    public void setId(long id) {
        this.id = id;
    }
    @Override
    public String toString() {
        return "User [id=" + id + ", Name=" + firstName + " " + lastName + ", User Type=" + userType + ", Login Type=" + loginType + ", Date=" + dateCreated + "]";
    }
}