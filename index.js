import { Directus } from '@directus/sdk';

const directus = new Directus('https://phpstack-389529-2115826.cloudwaysapps.com/');


const params = new URLSearchParams(window.location.search);
const getCampaign = params.get('campaign');
const getCode = params.get('code');
const getVenue = params.get('venue');


console.log(directus.items('campaigns'));

/*
const code = PetiteVue.reactive({
    loaded: false,
    id: false,
    used: true,
    venue: '',
    redeemCode() {
        if (this.id != '1038') {
            const query = `mutation {
        updateCode(page: { id: ${this.id}, used: true }) {
          id
        }
      }`;

            graphQL(query);
        }
    },
    getData() {
        const query = `{
    code(s:"name=${getCode}, has_parent=${getCampaign}, venue.valid_from<=today, venue.valid_to>=today") {
      first {
        id,
        used,
        venue {
          first {
            title
          }
        }
      }
    }
  }`;

        graphQL(query).then(result => {
            const code = result.code.first;
            if (code) {
                const venue = code.venue.first;

                this.id = code.id;
                this.used = code.used;
                this.venue = venue.title;

                webflowInit();
            }
            this.loaded = true;
        });
    }
});
*/