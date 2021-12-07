package com.springboot.server.model;
import java.util.Date;
import javax.persistence.*;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id;
    @Column(name = "first_name")
    private String firstName;
    @Column(name = "last_name")
    private String lastName;
    @Column(name = "user_type")
    private int userType;
    
    @Column(name = "login_type")
    private int loginType;
    
    @Column(name = "email")
    private String email;
    
    @Column(name = "password") 
    private String password;
    
    @GeneratedValue(strategy = GenerationType.AUTO)
    @Column(name = "date_created")
    private Date dateCreated;
    
    private String threadName;
    
    
    public User() {
    }
    public User(String first_name, String last_name, int user_type, int login_type, Date date_created, String email, String password) {
        this.firstName = first_name;
        this.lastName = last_name;
        this.userType = user_type;
        this.loginType = login_type;
        this.dateCreated = date_created;
        this.email = email;
        this.password = password; //hashed
    }
    
    public long getId() {
    	return this.Id;
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
    
    public String getEmail() {
        return email;
    }
    public void setEmail(String email) {
        this.email = email;
    }
    public String getPassword() {
        return this.password;
    }
    public void setPassword(String password) {
        this.password = password;
    }
    
    public void setId(long id) {
        this.Id = id;
    }
    @Override
    public String toString() {
        return "User [id=" + Id + ", Name=" + firstName + " " + lastName + ", User Type=" + userType + ", Login Type=" + loginType + ", Date=" + dateCreated + ", Email" + email + "]";
    }
	public String getThreadName() {
		return Thread.currentThread().getName();
	}
	public void setThreadName(String threadName) {
		this.threadName = threadName;
	}
}