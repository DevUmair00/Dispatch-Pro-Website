package com.dispatchpro.controller;


import com.dispatchpro.model.Register;
import com.dispatchpro.service.RegisterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@CrossOrigin(origins = "*")
@RequestMapping("/api/register")
public class RegisterController {

    @Autowired
    private RegisterService service;

    @GetMapping
    public List<Register> getAll()
    {
        return service.getAll();
    }

    @GetMapping("/{id}")
    public Register getById(@PathVariable Long id)
    {
        return service.getById(id);
    }

    @PostMapping
    public Register create(@RequestBody Register register)
    {
        return service.create(register);
    }


    @DeleteMapping("/{id}")
    public void delete(@PathVariable Long id)
    {
        service.delete(id);
    }

    @PutMapping("/{id}")
    public Register update(@PathVariable Long id , @RequestBody Register register)
    {
        return service.update(id,register);
    }
}
