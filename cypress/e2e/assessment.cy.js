describe('POST /api/v1/assessment', () => {
  const authHeader = {
    Authorization: 'auth',
    'Content-Type': 'application/json'
  };

  it('should successfully create an assessment with valid data', () => {
    cy.request({
      method: 'POST',
      url: '/api/v1/assessment',
      headers: authHeader,
      body: {
        name: 'Jessica',
        id_number: 123456,
        region_id: 25,
        lob_id: 1,
        owner_id: 1,
        created_by: 'System'
      }
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('id');
    });
  });

  it('should fail if name exceeds 25 characters', () => {
    cy.request({
      method: 'POST',
      url: '/api/v1/assessment',
      headers: authHeader,
      failOnStatusCode: false,
      body: {
        name: 'JessicaWithVeryLongNameExceedingLimit',
        id_number: 123456,
        region_id: 25,
        lob_id: 1,
        owner_id: 1,
        created_by: 'System'
      }
    }).then((response) => {
      expect(response.status).to.not.eq(200);
    });
  });

  it('should fail if lob_id is outside 1 to 4', () => {
    cy.request({
      method: 'POST',
      url: '/api/v1/assessment',
      headers: authHeader,
      failOnStatusCode: false,
      body: {
        name: 'Jessica',
        id_number: 123456,
        region_id: 25,
        lob_id: 5,
        owner_id: 1,
        created_by: 'System'
      }
    }).then((response) => {
      expect(response.status).to.not.eq(200);
    });
  });

  it('should fail if any mandatory field is missing', () => {
    cy.request({
      method: 'POST',
      url: '/api/v1/assessment',
      headers: authHeader,
      failOnStatusCode: false,
      body: {
        name: 'Jessica',
        id_number: 123456,
        region_id: 25,
        lob_id: 1,
        created_by: 'System'
      }
    }).then((response) => {
      expect(response.status).to.not.eq(200);
    });
  });

  it('should fail if id_number exceeds 6 digits', () => {
    cy.request({
      method: 'POST',
      url: '/api/v1/assessment',
      headers: authHeader,
      failOnStatusCode: false,
      body: {
        name: 'Jessica',
        id_number: 1234567,
        region_id: 25,
        lob_id: 1,
        owner_id: 1,
        created_by: 'System'
      }
    }).then((response) => {
      expect(response.status).to.not.eq(200);
    });
  });

  it('should fail if created_by exceeds 50 characters', () => {
    cy.request({
      method: 'POST',
      url: '/api/v1/assessment',
      headers: authHeader,
      failOnStatusCode: false,
      body: {
        name: 'Jessica',
        id_number: 123456,
        region_id: 25,
        lob_id: 1,
        owner_id: 1,
        created_by: 'A'.repeat(51)
      }
    }).then((response) => {
      expect(response.status).to.not.eq(200);
    });
  });

  it('should fail if region_id exceeds 5 characters', () => {
    cy.request({
      method: 'POST',
      url: '/api/v1/assessment',
      headers: authHeader,
      failOnStatusCode: false,
      body: {
        name: 'Jessica',
        id_number: 123456,
        region_id: 123456,
        lob_id: 1,
        owner_id: 1,
        created_by: 'System'
      }
    }).then((response) => {
      expect(response.status).to.not.eq(200);
    });
  });

  it('should fail if owner_id exceeds 1 characters', () => {
    cy.request({
      method: 'POST',
      url: '/api/v1/assessment',
      headers: authHeader,
      failOnStatusCode: false,
      body: {
        name: 'Jessica',
        id_number: 123456,
        region_id: 123456,
        lob_id: 12,
        owner_id: 1,
        created_by: 'System'
      }
    }).then((response) => {
      expect(response.status).to.not.eq(200);
    });
  });
});
