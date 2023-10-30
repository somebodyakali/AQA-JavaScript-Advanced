describe("First test suite", ()=>{

    context("First test suite - context", ()=>{

    });

    it("First test", () => {
        cy.visit("localhost:4200/pages/")
    });

    describe("Second describe inside", ()=>{

    })

});