class homePage {
    getTitle(){
        return cy.get('.audiotrack__title')
    }
    
    getSubscribeOptions(){
        return cy.get('.audiotrack__action--subscribe')
    }

    getGooglePodcasts(){
        return cy.get('ul[class=podcast-subscribe__list]>li:nth-child(2)')
    }

    
    getApplePodcasts(){
        return cy.get('ul[class=podcast-subscribe__list ]>li:nth-child(1)')
    }

    getVideoPlayButton(){
        return cy.get('.audiotrack__icon');
    }

    getAudioPlayer(){
        return cy.get('#mod-audio-player_module-1');
    }
    
    getAudioPlayerControls(){
        return cy.get('.audio-player__controls');
    }

    getPlayButton(){
        return cy.get('.audio-player__loader > .audio-player__button > .audio-player__icon');
    }

    getPauseButton(){
        return cy.get('.audio-player__loader > .audio-player__button > .audio-player__icon');
    }

    getMuteButton(){
        return cy.get('button[aria-label=Mute]');
    }

    getUnMuteButton(){
        return cy.get('button[aria-label=Mute]');
    }

    getToggleIcon(){
        return cy.get('.icon--translation');
    }

    getLanguageList(){
        return cy.get('.language-toggle__option-icon')
    }
}
export default homePage;