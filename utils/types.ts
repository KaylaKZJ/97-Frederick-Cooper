export interface ITenant {
    name: string
    tagline: string
    contactPerson: string
    phone: string
    services: string[]
    logo: {
        asset: {
            url: string
        }
    }
    websiteURL: string
    facebookURL: string
    instagramURL: string
    twitterURL: string
}