package com.example.vertragsdb;

import com.example.vertragsdb.model.Vertrag;
import com.example.vertragsdb.repository.VertragRepository;
import org.junit.Assert;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.data.mongodb.repository.config.EnableMongoRepositories;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.util.List;

@RunWith(SpringJUnit4ClassRunner.class)

@ContextConfiguration(classes = {VertragRepository.class})

@EnableMongoRepositories()

public class VertragRepositoryTest {
     /*    @Test

       public void findByName() {

            // Given

            // DB with default vertrag

            final String name = "Max Mustermann";


            // When

            final List<Vertrag> verträge = vertragRepository.findByName(name);


            // Then

            final int expectedCount = 1;

            Assert.assertEquals(expectedCount, vertrag.size());

            Assert.assertEquals(vertrag.size(), vertrag.stream().filter(

                    b -> b.getVertrag().contains(name)).count());

   }

      */
}
