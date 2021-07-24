package com.example.vertragsdb.connectionhelper;

import com.example.vertragsdb.model.Vertrag;
import com.example.vertragsdb.repository.VertragRepository;
import com.mongodb.BasicDBObjectBuilder;
import com.mongodb.DBObject;
import org.assertj.core.api.Assertions;
import org.junit.Before;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.data.mongo.DataMongoTest;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import static org.assertj.core.api.Assertions.assertThat;

@DataMongoTest
@ExtendWith(SpringExtension.class)
public class MongoDbSpringIntegrationTest {

    @Autowired
    VertragRepository vertragRepository;

    @Before
    public void setUp() throws Exception {
        vertragRepository.save(new Vertrag());
    }

    @Test
    public void shouldBeNotEmpty() {
        assertThat(vertragRepository.findAll()).isNotEmpty();
    }


    @Test
    public void test(@Autowired MongoTemplate mongoTemplate) {
        // given
        DBObject objectToSave = BasicDBObjectBuilder.start()
                .add("key", "value")
                .get();

        // when
        mongoTemplate.save(objectToSave, "collection");

        // then
        Assertions.assertThat(mongoTemplate.findAll(DBObject.class, "collection")).extracting("key")
                .containsOnly("value");


    }
}
