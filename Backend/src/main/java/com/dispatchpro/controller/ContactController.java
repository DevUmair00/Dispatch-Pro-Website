        package com.dispatchpro.controller;
        
        
        import com.dispatchpro.model.Contact;
        import com.dispatchpro.service.ContactService;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.web.bind.annotation.*;
        
        import java.util.List;
        
        @RestController
        @CrossOrigin(origins = "*")
        @RequestMapping("/api/contact")
        public class ContactController
        {
            @Autowired
            private ContactService service;
        
            @GetMapping
            public List<Contact> getAll()
            {
                return service.getAll();
            }
        
            @GetMapping("/{id}")
            public Contact getById(@PathVariable Long id)
            {
                return service.getById(id);
            }
        
        
            @PostMapping
            public Contact create(@RequestBody Contact contact)
            {
                return service.create(contact);
            }
        
        
            @DeleteMapping("/{id}")
            public void delete(@PathVariable Long id)
            {
                service.delete(id);
            }
        
        
            @PutMapping("/{id}")
            public Contact update(@PathVariable Long id , @RequestBody Contact contact)
            {
                return service.updateByID(id,contact);
            }
        }
