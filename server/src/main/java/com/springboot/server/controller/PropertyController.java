package com.springboot.server.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Vector;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.springboot.server.model.Property;
import com.springboot.server.repository.PropertyRepository;

@CrossOrigin(origins = "*", allowedHeaders="*")
@RestController
@RequestMapping("/api")
public class PropertyController {
	@Autowired
	PropertyRepository propertyRepo;
	
	@GetMapping("/properties")
	public ResponseEntity<List<Property>> getAllProperties(@RequestParam(required = false) String headline) {
	    try {
	      List<Property> properties = new Vector<Property>();

	      if (headline == null)
	        propertyRepo.findAll().forEach(properties::add);
	      else
	        propertyRepo.findByHeadlineContaining(headline).forEach(properties::add);

	      if (properties.isEmpty()) {
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	      }

	      return new ResponseEntity<>(properties, HttpStatus.OK);
	    } catch (Exception e) {
	      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	@GetMapping("/properties/{id}")
	public ResponseEntity<Property> getPropertyById(@PathVariable("id") long id) {
	    Optional<Property> propertyData = propertyRepo.findById(id);

	    if (propertyData.isPresent()) {
	      return new ResponseEntity<>(propertyData.get(), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
	
	@PostMapping("/properties")
	  public ResponseEntity<Property> createProperty(@RequestBody Property property) {
	    try {
	      Property _property = propertyRepo
	          .save(new Property(
	        		  property.getHeadline(),
	        		  property.getDescription(),
	        		  property.getAddress(),
	        		  property.getAmenities(),
	        		  property.getPrice(),
	        		  property.getDuration()
	        		 ));
	      return new ResponseEntity<>(_property, HttpStatus.CREATED);
	    } catch (Exception e) {
	      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
	
	@PutMapping("/properties/{id}")
	public ResponseEntity<Property> updateProperty(@PathVariable("id") long id, @RequestBody Property property) {
		Optional<Property> propertyData = propertyRepo.findById(id);

	    if (propertyData.isPresent()) {
	      Property _property= propertyData.get();
	      _property.setHeadline(property.getHeadline());
	      _property.setDescription(property.getDescription());
	      _property.setAddress(property.getAddress());
	      _property.setAmenities(property.getAmenities());
	      _property.setPrice(property.getPrice());
	      _property.setDuration(property.getDuration());
	      return new ResponseEntity<>(propertyRepo.save(_property), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
	
	@DeleteMapping("/properties/{id}")
	public ResponseEntity<HttpStatus> deleteProperty(@PathVariable("id") long id) {
		try {
	      propertyRepo.deleteById(id);
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	@DeleteMapping("/properties")
	public ResponseEntity<HttpStatus> deleteAllProperties() {
	    try {
	      propertyRepo.deleteAll();
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
}
