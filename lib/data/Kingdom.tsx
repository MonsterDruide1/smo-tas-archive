
export enum KingdomType {
    CAP,
    CASCADE,
    SAND,
    LAKE,
    WOODED,
    CLOUD,
    LOST,
    METRO,
    SNOW,
    SEASIDE,
    LUNCHEON,
    RUINED,
    BOWSERS,
    MOON,
    MUSHROOM,
    DARK,
    DARKER,
}

export function getIcon(kingdom: KingdomType): string {
    switch (kingdom as KingdomType) {
        case KingdomType.CAP:
            return "https://mario.wiki.gallery/images/thumb/c/c9/SMO_Art_-_Cap_Kingdom.jpg/250px-SMO_Art_-_Cap_Kingdom.jpg";
        case KingdomType.CASCADE:
            return "https://mario.wiki.gallery/images/thumb/a/aa/SMO_Art_-_Cascade_Kingdom.jpg/250px-SMO_Art_-_Cascade_Kingdom.jpg";
        case KingdomType.SAND:
            return "https://mario.wiki.gallery/images/thumb/a/ae/SMO_Art_-_Sand_Kingdom.jpg/250px-SMO_Art_-_Sand_Kingdom.jpg";
        case KingdomType.LAKE:
            return "https://mario.wiki.gallery/images/thumb/3/3e/SMO_Art_-_Lake_Kingdom.jpg/250px-SMO_Art_-_Lake_Kingdom.jpg";
        case KingdomType.WOODED:
            return "https://mario.wiki.gallery/images/thumb/f/fb/SMO_Art_-_Wooded_Kingdom.jpg/250px-SMO_Art_-_Wooded_Kingdom.jpg";
        case KingdomType.CLOUD:
            return "https://mario.wiki.gallery/images/thumb/8/8a/SMO_CLOUD.jpg/250px-SMO_CLOUD.jpg";
        case KingdomType.LOST:
            return "https://mario.wiki.gallery/images/thumb/2/2b/SMO_LOST.jpg/250px-SMO_LOST.jpg";
        case KingdomType.METRO:
            return "https://mario.wiki.gallery/images/thumb/b/ba/SMO_Art_-_Metro_Kingdom.jpg/250px-SMO_Art_-_Metro_Kingdom.jpg";
        case KingdomType.SNOW:
            return "https://mario.wiki.gallery/images/thumb/3/31/SMO_Art_-_Snow_Kingdom.png/250px-SMO_Art_-_Snow_Kingdom.png";
        case KingdomType.SEASIDE:
            return "https://mario.wiki.gallery/images/thumb/c/cf/SMO_Seaside_Kingdom.jpg/250px-SMO_Seaside_Kingdom.jpg";
        case KingdomType.LUNCHEON:
            return "https://mario.wiki.gallery/images/thumb/d/d3/SMO_Art_-_Luncheon_Kingdom.jpg/250px-SMO_Art_-_Luncheon_Kingdom.jpg";
        case KingdomType.RUINED:
            return "https://mario.wiki.gallery/images/thumb/a/a5/SMO_RUIN.jpg/250px-SMO_RUIN.jpg";
        case KingdomType.BOWSERS:
            return "https://mario.wiki.gallery/images/thumb/2/25/SMO_BOWSER.jpg/250px-SMO_BOWSER.jpg";
        case KingdomType.MOON:
            return "https://mario.wiki.gallery/images/thumb/c/c8/SMO_MOON.jpg/250px-SMO_MOON.jpg";
        case KingdomType.MUSHROOM:
            return "https://mario.wiki.gallery/images/thumb/5/59/SMO_-_Mushroom_Kingdom.jpg/250px-SMO_-_Mushroom_Kingdom.jpg";
        case KingdomType.DARK:
            return "https://mario.wiki.gallery/images/thumb/7/7a/DarkSide_SMO.png/250px-DarkSide_SMO.png";
        case KingdomType.DARKER:
            return "https://mario.wiki.gallery/images/thumb/3/36/SMO_Shot_-_Darker_Side.jpg/250px-SMO_Shot_-_Darker_Side.jpg";
        default:
            return "https://styles.redditmedia.com/t5_3ihls/styles/communityIcon_vfbddda2r9011.png"
    }
}

export function getNiceName(kingdom: KingdomType): string {
    switch (kingdom as KingdomType) {
        case KingdomType.CAP:
            return "Cap Kingdom";
        case KingdomType.CASCADE:
            return "Cascade Kingdom";
        case KingdomType.SAND:
            return "Sand Kingdom";
        case KingdomType.LAKE:
            return "Lake Kingdom";
        case KingdomType.WOODED:
            return "Wooded Kingdom";
        case KingdomType.CLOUD:
            return "Cloud Kingdom";
        case KingdomType.LOST:
            return "Lost Kingdom";
        case KingdomType.METRO:
            return "Metro Kingdom";
        case KingdomType.SNOW:
            return "Snow Kingdom";
        case KingdomType.SEASIDE:
            return "Seaside Kingdom";
        case KingdomType.LUNCHEON:
            return "Luncheon Kingdom";
        case KingdomType.RUINED:
            return "Ruined Kingdom";
        case KingdomType.BOWSERS:
            return "Bowser's Kingdom";
        case KingdomType.MOON:
            return "Moon Kingdom";
        case KingdomType.MUSHROOM:
            return "Mushroom Kingdom";
        case KingdomType.DARK:
            return "Dark Side";
        case KingdomType.DARKER:
            return "Darker Side";
        default:
            return "Unknown";
    }
}
