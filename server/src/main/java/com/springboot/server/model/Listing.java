package com.springboot.server.model;
import java.util.Date;
import javax.persistence.*;

@Entity
@Table(name = "listings")
public class Listing {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long Id;
    @Column(name = "user_id")
    private int userId;
    @Column(name = "property_id")
    private int propertyId;
    @Column(name = "date_listed")
    private Date dateListed;
    @Column(name = "number_considering")
    private int numberConsidering;
    
    private String threadName;
    
    public Listing() {
    }
    public Listing(int user_id, int property_id, Date date_listed, 
    		int number_considering) {
        this.userId = user_id;
        this.propertyId = property_id;
        this.dateListed = date_listed;
        this.numberConsidering = number_considering;
    }
    
    public long getId() {
    	return this.Id;
    }
    public int getUserId() {
        return this.userId;
    }

    public int getPropertyId() {
        return this.propertyId;
    }
    
    public Date getDateListed() {
        return this.dateListed;
    }
    
    public int getNumberConsidering() {
        return this.numberConsidering;
    }
    
    @Override
    public String toString() {
        return "Listing [id=" + Id + 
        		", UserId=" + userId + 
        		", PropertyId=" + propertyId + 
        		", Date Listed=" + dateListed + 
        		", Number Considering=" + numberConsidering 
        		+ "]";
    }
	public String getThreadName() {
		return Thread.currentThread().getName();
	}
	public void setThreadName(String threadName) {
		this.threadName = threadName;
	}
}