
const items = {};

/* รายการ Spirited Away */
items.spirited = {
  id: "spirited",
  name: "The Other One Series",
  group: "Art toy",
  category: "อาร์ตทอย",
  maker: " Lang ( โหลง ) ",
  makerLabel: "ผู้สร้างสรรค์ศิลปิน",
  caption: "(คอลเลกชันแรก - 2021)",
  description:
    "คอลเลกชันเปิดตัวที่ทำให้คนเริ่มรู้จัก Hirono  " +
    "ดีไซน์ที่สะท้อนถึงด้านมืดหรือตัวตนอีกด้านหนึ่งภายในจิตใจ",
  story:
    "เป็นคอลแรก ที่เริ่มน่าสะสม จึงสนใจ " +
    " ",
  image: " assets/images/collection/hirono col 01.avif ",
  related: ["ram", "converse"],
};

/* รายการ Random Access Memories */
items.ram = {
  id: "ram",
  name: "City of Mercy Series",
  group: "Art toy",
  category: "อาร์ตทอย",
  maker: " Lang ( โหลง ) ",
  makerLabel: "ผู้สร้างสรรค์ศิลปิน",
  caption: " (2022)",
  description:
    "ได้รับแรงบันดาลใจจากความวุ่นวาย ความเย็นชา " +
    "และความโดดเดี่ยวของผู้คนที่อาศัยอยู่ในเมืองใหญ่",
  story:
    "เป็นหนึ่งในคอลเลกชันที่สะท้อนลายเซ็นทางอารมณ์ " +
    "ได้อย่างสมบูรณ์แบบและตกผลึกที่สุด",
  image: "assets/images/collection/hirono col 02.avif",
  related: ["prince", "budapest"],
};

/* รายการ The Little Prince */
items.prince = {
  id: "prince",
  name: " Reshape Series",
  group: "Art toy",
  category: "อาร์ตทอย",
  maker: " Lang ( โหลง ) ",
  makerLabel: "ผู้สร้างสรรค์ศิลปิน",
  caption: "(2023)",
  description:
    "คอลเลกชันที่สะท้อนถึงการเปลี่ยนแปลง การเติบโต " +
    "และการเยียวยารักษาบาดแผลในจิตใจผ่านรูปร่างที่บิดเบี้ยวแต่มีความหมายลึกซึ้ง",
  story:
    "เป็นคอลเลกชันที่เน้นการสำรวจ “สภาวะจิตใจและการหล่อหลอมตัวตนใหม่” " +
    "เหมาะมากกับคนที่ชอบงานสะสมที่สะท้อนถึงการเยียวยาจิตใจและการยอมรับความเปราะบางของตัวเอง",
  image: "assets/images/collection/hirono col 03.avif",
  related: ["am", "x100"],
};

/* รายการ Fujifilm X100 */
items.x100 = {
  id: "x100",
  name: "MIME Series",
  group: "Art toy",
  category: "อาร์ตทอย",
  maker: " Lang ( โหลง ) ",
  makerLabel: "ผู้สร้างสรรค์ศิลปิน",
  caption: "(2023)",
  description:
    "ได้แรงบันดาลใจมาจากศิลปะการแสดงละครใบ้ (Mime)  " +
    "ที่แม้จะไม่ต้องเปล่งเสียงพูดออกมา แต่แววตากลับสื่ออารมณ์ความรู้สึกข้างในได้ดีที่สุด",
  story:
    "เปรียบเสมือนเวทีละครใบ้ที่สะท้อน “การแสดงออกและการสวมบทบาททางสังคมของมนุษย์” " +
    "ซีรีส์นี้เป็นงานที่สะท้อนภาวะ “พูดไม่ได้แต่รู้สึกทุกอย่าง” ได้อย่างทรงพลังและเข้าถึงอารมณ์คนเก็บสะสมสายดราม่า-จิตวิทยาได้ดีมากอีกชุดหนึ่ง",
  image: "assets/images/collection/hirono col 04.avif",
  related: ["spirited", "hobbit"],
};

/* รายการ The Grand Budapest Hotel */
items.budapest = {
  id: "budapest",
  name: " Shelter Series",
  group: "Art toy",
  category: "อาร์ตทอย",
  maker: " Lang ( โหลง ) ",
  makerLabel: "ผู้สร้างสรรค์ศิลปิน",
  caption: "(2024)",
  description:
    "คอลเลกชันที่สื่อถึงพื้นที่ปลอดภัยเล็กๆ  " +
    "ในใจของมนุษย์ที่ใช้ซ่อนตัวจากความโหดร้ายของโลกภายนอก",
  story:
    "ต่อยอดสู่แนวคิดจาก MIME " +
    "พร้อมงานพื้นผิวที่ผสมผสานระหว่างวัสดุป้องกันภัยแบบสมบุกสมบัน หากเก็บต่อก็คู่ควรมาก ๆ ",
  image: "assets/images/collection/hirono col 04.avif",
  related: ["converse", "ram"],
};

/* รายการ AM */
items.am = {
  id: "am",
  name: "Snowman Figurine",
  group: "Art toy",
  category: "อาร์ตทอย",
  maker: " Lang ( โหลง )",
  makerLabel: "ผู้สร้างสรรค์ศิลปิน",
  caption: "(2026)",
  description:
    "กิมมิกของ Snowman สำหรับฮิโรโนะไม่ได้หมายถึงเทศกาลเฉลิมฉลองที่สดใสอย่างเดียว " +
    "แต่มันคือสัญลักษณ์ของ ความเปราะบางและสิ่งที่จะค่อยๆ ละลายหายไปตามกาลเวลา",
  story:
    "ฟิกเกอร์สเกลใหญ่ไซส์พิเศษของฮิโรโนะมักจะผลิตมาในจำนวนจำกัดและปล่อยออกมาเป็นรอบๆ " +
    "หากเป็นสายเก็บไม่ควรพลาด",
  image: "assets/images/collection/hirono col 06.avif",
  related: ["hobbit", "x100"],
};

/* รายการ The Hobbit */
items.hobbit = {
  id: "hobbit",
  name: "Harry Potter Series Figures",
  group: "Art toy",
  category: "อาร์ตทอย",
  maker: " Lang ( โหลง ) ",
  makerLabel: "ผู้สร้างสรรค์ศิลปิน",
  caption: "(2026)",
  description:
    "โลกเวทมนตร์เวอร์ชันที่มีความหม่น ความเหงา และความโดดเดี่ยวของเด็กชายผู้รอดชีวิต " +
    "หน้าตาน้องยังคงนิ่ง ซึม และแบกรับอารมณ์บางอย่างไว้ ซึ่งมันเข้ากับธีมบาดแผลในใจของแฮร์รี่แบบเป๊ะมาก",
  story:
    " ชอบความดาร์กแฟนตาซี และรักทั้งฮิโรโนะทั้งแฮร์รี่ คอลนี้คือที่สุดของปี 2026 " +
    "ไม่ต้องลังเลเลยที่จะเก็บ",
  image: "assets/images/collection/hirono col 07.avif",
  related: ["budapest", "converse"],
};

/* รายการ Converse All Star */
items.converse = {
  id: "converse",
  name: "The Hundreds Figure",
  group: "Art toy",
  category: "อาร์ตทอย",
  maker: " Lang ( โหลง ) ",
  makerLabel: "ผู้สร้างสรรค์ศิลปิน",
  caption: "(2026)",
  description:
    "คอลแลปส์พิเศษแบบ Standalone ตัวเดี่ยว " +
    "ระหว่าง POP MART กับแบรนด์สตรีตแวร์ชื่อดังอย่าง The Hundreds",
  story:
    "ถ้าชอบความเท่ ความสตรีต และอยากได้ฮิโรโนะลุคที่ไม่ซึมกะทือ ตัวนี้คือของต้องมี " +
    " ",
  image: "assets/images/collection/hirono col 08.avif",
  related: ["prince", "am"],
};

/* อ่าน id จาก URL */
const itemId =
  new URLSearchParams(window.location.search).get("id") || "spirited";
const item = Object.hasOwn(items, itemId) ? items[itemId] : null;

/* ฟังก์ชันแสดงข้อมูล */
function showDetail(item) {
  document.title = "Detail | Personal Collection";
  document.querySelectorAll("[data-field]").forEach(function (element) {
    element.textContent = item[element.dataset.field];
  });
  const image = document.querySelector("#detail-image");
  image.src = item.image;
  image.alt = item.name;
}

/* ฟังก์ชันรายการที่เกี่ยวข้อง */
function showRelated(item) {
  item.related.forEach(function (id, index) {
    const related = items[id];
    const suffix = index === 0 ? "" : "-2";
    document.querySelector("#related-link" + suffix).href =
      "detail.html?id=" + id;
    document.querySelector("#related-image" + suffix).src = related.image;
    document.querySelector("#related-name" + suffix).textContent = related.name;
    document.querySelector("#related-caption" + suffix).textContent =
      related.caption;
  });
}

/* เลือกการแสดงผล */
if (item) {
  showDetail(item);
  showRelated(item);
} else {
  document.querySelector("#detail-content").hidden = true;
  document.querySelector("#not-found").hidden = false;
  document.title = "Detail | Personal Collection";
}