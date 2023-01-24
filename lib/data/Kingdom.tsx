
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
    return `/smo/img/kingdoms/${getIconName(kingdom)}`;
}

function getIconName(kingdom: KingdomType): string {
    switch (kingdom as KingdomType) {
        case KingdomType.CAP:
            return "Cap_Kingdom.jpg";
        case KingdomType.CASCADE:
            return "Cascade_Kingdom.jpg";
        case KingdomType.SAND:
            return "Sand_Kingdom.jpg";
        case KingdomType.LAKE:
            return "Lake_Kingdom.jpg";
        case KingdomType.WOODED:
            return "Wooded_Kingdom.jpg";
        case KingdomType.CLOUD:
            return "Cloud_Kingdom.jpg";
        case KingdomType.LOST:
            return "Lost_Kingdom.jpg";
        case KingdomType.METRO:
            return "Metro_Kingdom.jpg";
        case KingdomType.SNOW:
            return "Snow_Kingdom.png";
        case KingdomType.SEASIDE:
            return "Seaside_Kingdom.jpg";
        case KingdomType.LUNCHEON:
            return "Luncheon_Kingdom.jpg";
        case KingdomType.RUINED:
            return "Ruined_Kingdom.jpg";
        case KingdomType.BOWSERS:
            return "Bowsers_Kingdom.jpg";
        case KingdomType.MOON:
            return "Moon_Kingdom.jpg";
        case KingdomType.MUSHROOM:
            return "Mushroom_Kingdom.jpg";
        case KingdomType.DARK:
            return "Dark_Side.png";
        case KingdomType.DARKER:
            return "Darker_Side.jpg";
        default:
            return "Unknown.webp"
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
