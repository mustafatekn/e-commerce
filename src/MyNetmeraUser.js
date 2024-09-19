class MyNetmeraUser {
    constructor() {
        this.longAtt = null;
        this.dateAtt = null;
        this.longArrOperator = null;
        this.arrayStringAttOperator = null;
        this.booleanAtt = null;
        this.doubleAtt = null;
        this.intArrayOperator = null;
        this.dateArrOperator = null;
        this.tsArrOperator = null;
        this.booleanArrOperator = null;
        this.enumArrOperator = null;
        this.enumAtt = null;
        this.isPrivateInfoStringAtt = null;
        this.favoriteTeam = null;
        this.tsAtt = null;
        this.stringAtt = null;
        this.doubleArrOperator = null;
        this.intAtt = null;
    }
    setLongAtt(longAtt) {
        this.longAtt = longAtt;
    }
    setDateAtt(dateAtt) {
        this.dateAtt = dateAtt;
    }
    setLongArrOperator(longArrOperator) {
        this.longArrOperator = longArrOperator;
    }
    setArrayStringAttOperator(arrayStringAttOperator) {
        this.arrayStringAttOperator = arrayStringAttOperator;
    }
    setBooleanAtt(booleanAtt) {
        this.booleanAtt = booleanAtt;
    }
    setDoubleAtt(doubleAtt) {
        this.doubleAtt = doubleAtt;
    }
    setIntArrayOperator(intArrayOperator) {
        this.intArrayOperator = intArrayOperator;
    }
    setDateArrOperator(dateArrOperator) {
        this.dateArrOperator = dateArrOperator;
    }
    setTsArrOperator(tsArrOperator) {
        this.tsArrOperator = tsArrOperator;
    }
    setBooleanArrOperator(booleanArrOperator) {
        this.booleanArrOperator = booleanArrOperator;
    }
    setEnumArrOperator(enumArrOperator) {
        this.enumArrOperator = enumArrOperator;
    }
    setEnumAtt(enumAtt) {
        this.enumAtt = enumAtt;
    }
    setIsPrivateInfoStringAtt(isPrivateInfoStringAtt) {
        this.isPrivateInfoStringAtt = isPrivateInfoStringAtt;
    }
    setFavoriteTeam(favoriteTeam) {
        this.favoriteTeam = favoriteTeam;
    }
    setTsAtt(tsAtt) {
        this.tsAtt = tsAtt;
    }
    setStringAtt(stringAtt) {
        this.stringAtt = stringAtt;
    }
    setDoubleArrOperator(doubleArrOperator) {
        this.doubleArrOperator = doubleArrOperator;
    }
    setIntAtt(intAtt) {
        this.intAtt = intAtt;
    }
    toJSON() {
        return {
            longAtt: this.longAtt,
            dateAtt: this.dateAtt,
            longArrOperator: this.longArrOperator,
            arrayStringAttOperator: this.arrayStringAttOperator,
            booleanAtt: this.booleanAtt,
            doubleAtt: this.doubleAtt,
            intArrayOperator: this.intArrayOperator,
            dateArrOperator: this.dateArrOperator,
            tsArrOperator: this.tsArrOperator,
            booleanArrOperator: this.booleanArrOperator,
            enumArrOperator: this.enumArrOperator,
            enumAtt: this.enumAtt,
            isPrivateInfoStringAtt: this.isPrivateInfoStringAtt,
            favoriteTeam: this.favoriteTeam,
            tsAtt: this.tsAtt,
            stringAtt: this.stringAtt,
            doubleArrOperator: this.doubleArrOperator,
            intAtt: this.intAtt,
        };
    }
}