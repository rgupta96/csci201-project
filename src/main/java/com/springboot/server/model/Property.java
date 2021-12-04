package com.springboot.server.model;

import javax.persistence.*;

@Entity
@Table(name="properties")
public class Property {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;
	
	@Column(name="headline")
	private String headline;
	
	@Column(name="description")
	private String description;
	
	@Column(name="address")
	private String address;
	
	@Column(name="amenities")
	private String amenities;
	
	@Column(name="price")
	private int price;
	
	@Column(name="duration")
	private int duration;
	
	public Property() {
		
	}
	
	public Property(String headline, String description, String address, String amenities, int price, int duration) {
		this.headline = headline;
		this.description = description;
		this.address = address;
		this.amenities = amenities;
		this.price = price;
		this.duration = duration;
	}
	
	public long getId() {
		return id;
	}

	public String getHeadline() {
		return headline;
	}

	public void setHeadline(String h) {
		this.headline = h;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public String getAddress() {
		return address;
	}

	public void setAddress(String address) {
		this.address = address;
	}
	
	public String getAmenities() {
		return amenities;
	}

	public void setAmenities(String amenities) {
		this.amenities = amenities;
	}
	
	public int getPrice() {
		return this.price;
	}

	public void setPrice(int price) {
		this.price = price;
	}
	
	public int getDuration() {
		return this.duration;
	}

	public void setDuration(int duration) {
		this.duration = duration;
	}
	
	@Override
	public String toString() {
		return "Property [id=" + id + ", headline=" + headline + ", desc=" + description + ", address=" + address + ", address=" + address + ", amenities=" + amenities + ", price=" + price + ", duration=" + duration + "]";
	}
}
