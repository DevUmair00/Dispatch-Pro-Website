package com.dispatchpro.repository;

import com.dispatchpro.model.Contact;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ContactRepository extends JpaRepository<Contact , Long> {

}
