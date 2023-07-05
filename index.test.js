const utils = require("./index");

describe("[Görev 1] nesneyiTrimle", () => {
  test("[1] propları trimlenmiş bir nesne döndürüyor", () => {
    // ÖRNEK
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.nesneyiTrimle(input);
    expect(actual).toEqual(expected);
  });
});

describe("[Görev 2] verileniTrimle", () => {
  test("[3] verilen propu trimliyor", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar ", baz: " baz" };
    const actual = utils.verileniTrimle(input, "foo");
    expect(actual).toEqual(expected);
  });
  test("[4] verilen dışındaki proplar trimlenmeden döndürülüyor", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const actual = utils.verileniTrimle(input, "foo");
    for (let key in input) {
      if (key !== "foo") {
        expect(actual[key]).toEqual(input[key]);
      }
    }
  });
});

describe("[Görev 3] enBuyukTamsayiyiBul", () => {
  test("[5] bir dizi nesne içindeki en büyük tamsayiyi döndürüyor { tamsayi: 2 }", () => {
    const input = [{ tamsayi: 1 }, { tamsayi: 3 }, { tamsayi: 2 }];
    const actual = utils.enBuyukTamsayiyiBul(input);
    expect(actual).toEqual(3);
  });
});

describe("[Görev 4] Sayici", () => {
  let sayici;
  beforeEach(() => {
    sayici = new utils.Sayici(3); // her test yeni bir sayı ile başlatılıyor
  });
  test("[6] sayici.asagiSay ilk çağırılışında başlangıç sayışını yapıyor", () => {
    expect(sayici.asagiSay()).toEqual(3);
  });
  test("[7] sayici.asagiSay İKİNCİ çağırılışında başlangıç eksi 1 sayıyor", () => {
    sayici.asagiSay();
    expect(sayici.asagiSay()).toEqual(2);
  });
  test("[8] sayıcı sonunda sıfıra ulaşır ama daha aşağı saymaz", () => {
    for (let i = 0; i < 6; i++) {
      sayici.asagiSay();
    }
    expect(sayici.asagiSay()).toEqual(0);
    expect(sayici.asagiSay()).toEqual(0);
  });
});

describe("[Görev 5] Mevsimler", () => {
  let mevsimler;
  beforeEach(() => {
    mevsimler = new utils.Mevsimler(); // her test yeni bir mevsimle başlar
  });
  test('[9] mevsimler.sonraki İLK çağırılışında "yaz" döndürüyor', () => {
    expect(mevsimler.sonraki()).toEqual("yaz");
  });
  test('[10] mevsimler.sonraki İKİNCİ çağırılışında "sonbahar" döndürüyor', () => {
    mevsimler.sonraki();
    expect(mevsimler.sonraki()).toEqual("sonbahar");
  });
  test('[11] mevsimler.sonraki ÜÇÜNCÜ çağırılışında "kış" döndürüyor', () => {
    for (let i = 0; i < 2; ++i) {
      mevsimler.sonraki();
    }
    expect(mevsimler.sonraki()).toEqual("kış");
  });
  test('[12] mevsimler.sonraki DÖRDÜNCÜ çağırılışında "ilkbahar" döndürüyor', () => {
    for (let i = 0; i < 3; ++i) {
      mevsimler.sonraki();
    }
    expect(mevsimler.sonraki()).toEqual("ilkbahar");
  });
  test('[13] mevsimler.sonraki BEŞİNCİ çağırılışında "yaz" döndürüyor', () => {
    for (let i = 0; i < 4; ++i) {
      mevsimler.sonraki();
    }
    expect(mevsimler.sonraki()).toEqual("yaz");
  });
  test('[14] mevsimler.sonraki KIRKINCI çağırılışında "ilkbahar" döndürüyor', () => {
    for (let i = 0; i < 39; ++i) {
      mevsimler.sonraki();
    }
    expect(mevsimler.sonraki()).toEqual("ilkbahar");
  });
});

describe("[Görev 6] Araba", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Araba("focus", 20, 30); // her test yeni bir araba oluşturur
  });
  test("[15] arabayı sürünce güncellenmiş odometer döndürüyor", () => {
    expect(focus.sur(10)).toEqual(10);
    expect(focus.sur(20)).toEqual(30);
  });
  test("[16] arabayı sürmek benzin tüketiyor", () => {
    focus.sur(90);
    expect(focus.depo).toEqual(17);
  });
  test("[17] benzinalma arabayı sürmeye izin veriyor", () => {
    focus.sur(30);
    focus.benzinal(10);
    focus.sur(30);
    expect(focus.depo).toEqual(19);
  });
  test("[18] dolu depoya benzin alma etki etmiyor", () => {
    focus.benzinal(20);
    expect(focus.depo).toEqual(20);
  });
});

describe("[Görev 7] asenkronCiftSayi", () => {
  test("[19] bir çift sayı verilirse true çözümlüyor", () => {
    return utils.asenkronCiftSayi(2).then((result) => {
      expect(result).toEqual(true);
    });
  });
  test("[20] tek sayı verilirse false çözümlüyor", () => {
    return utils.asenkronCiftSayi(1).then((result) => {
      expect(result).toEqual(false);
    });
  });
});
