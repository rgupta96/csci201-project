package com.springboot.server.model;
import java.util.Date;
import javax.persistence.*;

@Entity
@Table(name = "listings")
public class Listing {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;
    @Column(name = "user_id")
    private int userId;
    @Column(name = "property_id")
    private int propertyId;
    @Column(name = "date_listed")
    private Date dateListed;
    @Column(name = "number_considering")
    private int numberConsidering;
    @Column(name = "active")
    private boolean active;
    public Listing() {
    }
    public Listing(int user_id, int property_id, Date date_listed, 
    			   int number_considering, boolean active) {
        this.userId = user_id;
        this.propertyId = property_id;
        this.dateListed = date_listed;
        this.numberConsidering = number_considering;
        this.active = active;
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
    public boolean getActiveStatus() {
        return active;
    }
    public void setActiveStatus(boolean newStatus) {
        this.active = newStatus;
    }
    
    @Override
    public String toString() {
        return "Listing [id=" + id + 
        		", UserId=" + userId + 
        		", PropertyId=" + propertyId + 
        		", Date Listed=" + dateListed + 
        		", Number Considering=" + numberConsidering + ", Active=" + active
        		+ "]";
    }
}