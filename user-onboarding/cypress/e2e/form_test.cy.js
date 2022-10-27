describe("User Onboarding App", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/");
    })

    const nameInput = () => cy.get("input[name=username]");
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get("input[name=password]");
    const tosBox = () => cy.get("input[name=tos]");
    const submitBtn = () => cy.get("button[id='submitBtn']");

    it("check to make sure tests work", () => {
        expect(5 + 2).to.equal(7);  
        expect(3 + 5).not.equal(5);
    })

    it("can type in the inputs", () => {
        nameInput() 
            .should("have.value", "")
            .type("Willy Vega")
            .should("have.value", "Willy Vega");
    
        emailInput()
            .should("have.value", "")
            .type("willyvegatenorio@gmail.com")
            .should("have.value", "willyvegatenorio@gmail.com");   

        passwordInput()
            .should("have.value", "")
            .type("wv12345")
            .should("have.value", "wv12345");        
    })

    it("can check the Terms of Service box", () => {
        tosBox().click();
    })

    it("can submit the form data", () => {
        submitBtn().click()
    })

    it("if an input is left empty", () => {
        nameInput().should('not.be.empty');
        emailInput().should('not.be.empty');
        passwordInput().should('not.be.empty');
        tosBox()
    })



    
})