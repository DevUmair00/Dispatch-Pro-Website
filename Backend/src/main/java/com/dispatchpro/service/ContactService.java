package com.dispatchpro.service;

import com.dispatchpro.model.Contact;
import com.dispatchpro.repository.ContactRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ContactService {

    @Autowired
    private ContactRepository repo;

    public List<Contact> getAll()
    {
        return repo.findAll();
    }

    public Contact getById(Long id){
        return repo.findById(id).orElseThrow();
    }

    public Contact create(Contact contact)
    {
        return repo.save(contact);
    }

    public void delete(Long id)
    {
        repo.deleteById(id);
    }

    public Contact updateByID(Long id , Contact contact)
    {
        Contact pre = repo.findById(id).orElseThrow();

        pre.setName(contact.getName());
        pre.setPhone(contact.getPhone());
        pre.setEmail(contact.getEmail());
        pre.setTruck_type(contact.getTruck_type());
        pre.setNo_of_trucks(contact.getNo_of_trucks());
        pre.setOperating_state(contact.getOperating_state());
        pre.setNote(contact.getNote());

        return repo.save(pre);
    }
}
