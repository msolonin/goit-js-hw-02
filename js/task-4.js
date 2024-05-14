function getShippingCost(country) {
    switch (country) {
        case 'Australia':
            return `Shipping to ${country} will cost 170 credits`;
        case 'China':
            return `Shipping to ${country} will cost 100 credits`;
        case 'Chile':
            return `Shipping to ${country} will cost 250 credits`;
        case 'Jamaica':
            return `Shipping to ${country} will cost 150 credits`;
      default:
        return "Sorry, there is no delivery to your country";
    }
}
