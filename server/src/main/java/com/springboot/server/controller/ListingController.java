package com.springboot.server.controller;

import java.util.ArrayList;
import java.util.LinkedList;
import java.util.List;
import java.util.Optional;

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

import com.springboot.server.model.Listing;
import com.springboot.server.repository.ListingRepository;

@CrossOrigin(origins = "*", allowedHeaders="*")
@RestController
@RequestMapping("/api")
public class ListingController {
	@Autowired
	ListingRepository listingRepo;
	
	@GetMapping("/listings")
	public ResponseEntity<List<Listing>> getAllListings(
			@RequestParam(defaultValue="0", required = false) int user_id) {
	    try {
	      List<Listing> listings = new ArrayList<Listing>();
	      if (user_id <= 0)
		        listingRepo.findAll().forEach(listings::add);
		      else
		        listingRepo.findByUserId(user_id).forEach(listings::add);
	      if (listings.isEmpty()) {
	        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	      }

	      return new ResponseEntity<>(listings, HttpStatus.OK);
	    } catch (Exception e) {
	      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	@GetMapping("/listings/{id}")
	public ResponseEntity<Listing> getListingById(@PathVariable("id") long id) {
	    Optional<Listing> ListingData = listingRepo.findById(id);

	    if (ListingData.isPresent()) {
	      return new ResponseEntity<>(ListingData.get(), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
	
	@GetMapping("/listings/property/{id}")
	public ResponseEntity<List<Listing>> getListingByPropertyId(
			@PathVariable("id") int property_id
		) {
		try {
		      List<Listing> listings = new LinkedList<Listing>();
		      if (property_id <= 0)
			        listingRepo.findAll().forEach(listings::add);
			      else
			        listingRepo.findByPropertyId(property_id).forEach(listings::add);
		      if (listings.isEmpty()) {
		        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
		      }

		      return new ResponseEntity<>(listings, HttpStatus.OK);
		    } catch (Exception e) {
		      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
		  }

	}
	
	@PostMapping("/listings")
	  public ResponseEntity<Listing> createListing(@RequestBody Listing Listing) {
	    try {
	      Listing _Listing = listingRepo
	          .save(new Listing(
	        		  Listing.getUserId(),
	        		  Listing.getPropertyId(),
	        		  Listing.getDateListed(),
	        		  Listing.getNumberConsidering()
	        		 ));
	      return new ResponseEntity<>(_Listing, HttpStatus.CREATED);
	    } catch (Exception e) {
	      return new ResponseEntity<>(null, HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	  }
	
	@PutMapping("/listings/{id}")
	public ResponseEntity<Listing> updateListing(@PathVariable("id") long id, @RequestBody Listing Listing) {
		Optional<Listing> ListingData = listingRepo.findById(id);

	    if (ListingData.isPresent()) {
	      Listing _Listing= ListingData.get();
	      return new ResponseEntity<>(listingRepo.save(_Listing), HttpStatus.OK);
	    } else {
	      return new ResponseEntity<>(HttpStatus.NOT_FOUND);
	    }
	}
	
	@DeleteMapping("/listings/{id}")
	public ResponseEntity<HttpStatus> deleteListing(@PathVariable("id") long id) {
		try {
	      listingRepo.deleteById(id);
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
	
	@DeleteMapping("/listings")
	public ResponseEntity<HttpStatus> deleteAlllistings() {
	    try {
	      listingRepo.deleteAll();
	      return new ResponseEntity<>(HttpStatus.NO_CONTENT);
	    } catch (Exception e) {
	      return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
	    }
	}
}
