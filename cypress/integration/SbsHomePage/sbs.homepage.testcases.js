/// <reference types="cypress" />
import homePage from '../HomePage/homePage'

before(function(){
  cy.fixture('example').then(function(data){
    this.data = data;
  })

})

describe('UIAutomation', function(){
  const home = new homePage();

  it('verify title',function(){
    cy.visit(this.data.url);
    home.getTitle().contains(this.data.title); 
  })

 it('verify subscribe dropdown',function(){
    cy.visit(this.data.url);
    home.getSubscribeOptions().click();
    home.getGooglePodcasts().contains(this.data.google);
    home.getApplePodcasts().contains(this.data.apple);
  })

  it('verify audio player is launched', function(){
    cy.visit(this.data.url);
    home.getVideoPlayButton().click();
    cy.wait(1000);
    home.getAudioPlayer().should('be.visible');
  })

  it('verify player controls', function(){
    cy.visit(this.data.url);
    home.getVideoPlayButton().click();
    cy.wait(1000);
    home.getAudioPlayer().should('be.visible');
    home.getAudioPlayerControls().should('be.visible');
    home.getPauseButton().click();
    cy.wait(1000);
    home.getPlayButton().should('be.visible');
  })
  
  it('verify language toggle',function(){
    cy.visit(this.data.url);
    home.getToggleIcon().click();
    home.getLanguageList().contains(this.data.language);
  })

  it('Get API response',function(){
    cy.request(this.data.endpoint)
    .then(function(response){

      expect(response.status).equal(200)
      expect(response.body).to.be.a('array')

    })
  })
  
})