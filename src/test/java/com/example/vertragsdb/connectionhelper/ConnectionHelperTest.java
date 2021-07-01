package com.example.vertragsdb.connectionhelper;

import org.junit.jupiter.api.Assertions;
import org.junit.jupiter.api.Test;


class ConnectionHelperTest {
    //Integrationstest der Datenbank Connection über den Connection Helper

    public ConnectionHelper connection = new ConnectionHelper();

    @Test
    public void testMongoDBFactory(){
        Assertions.assertNotNull(connection.mongoDbFactory());
    }


}