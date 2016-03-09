var constants = {
    "similar_type": [
        {"id": "c10ec518-fc08-4482-8d01-95f78c58c037", "name": "Similar"},
        {"id": "c10ec518-fc08-4482-8d01-95f78c58c038", "name": "Bargain"}
    ],
    "gender": [
        {"id": "c10ec518-fc08-4482-8d01-95f78c58c937", "name": "Male"},
        {"id": "38e8f21f-6a79-4b2d-9988-0784b9d60b68", "name": "Female"}
    ],
    "parent_category_id": [
        {"id": "f463c427-cb1b-46d8-8acc-95e2a79ef991", "name": "Accessories"},
        {"id": "961ec864-12e2-4372-baad-b08a2ac7bacc", "name": "Bags & Purses"},
        {"id": "0ff18d29-e4a1-4043-8a1d-388bcd7ad9bb", "name": "Dresses"},
        {"id": "3102a100-fb13-4b23-ba12-1695ed2166a2", "name": "Eyewear"},
        {"id": "411b672e-9cab-4ae4-8c4a-8677e49a8b30", "name": "Jackets & Coats"},
        {"id": "05abffb2-88f2-494a-9982-89a8c010c8ec", "name": "Jeans"},
        {"id": "10905643-aa40-490a-a08d-71dbe93f6f52", "name": "Jewelry & Watches"},
        {"id": "91bd20ac-1380-4bfc-b840-a3c070a2325d", "name": "Pants & Shorts"},
        {"id": "e9b6e04c-5140-450e-8f57-0d6594e315ca", "name": "Shoes"},
        {"id": "6df33ccb-8e4b-4059-8958-9f6aca32204b", "name": "Skirts"},
        {"id": "af8c15b6-46dc-497c-b90f-cf5fb303f20f", "name": "Sportswear"},
        {"id": "7df4588f-36ff-4d84-8769-3b0ede70762b", "name": "Suits"},
        {"id": "5fd2a816-7e6e-46de-aaed-a5adcbfac29f", "name": "Sweaters & Knitwear"},
        {"id": "56801088-5482-4140-b460-c54b37ac3769", "name": "Swimwear"},
        {"id": "f57c0eeb-bfc7-4a47-a64f-5253d16acf33", "name": "Tops"},
        {"id": "41198e63-c3cd-4a23-a536-a28f94c1f9f8", "name": "Underwear"}
    ], "category_id": [
        {"id": "f7d8519e-53ce-4312-bad0-94c51b1cb4e4", "name": "Accessories"},
        {"id": "ba1e3f63-ca86-41ad-9180-902ea275c8a2", "name": "Athletics"},
        {"id": "ff94e09c-4543-46a9-83d4-62bedc7854e7", "name": "Backpack"},
        {"id": "ae7fd546-5be7-41ec-9baa-2e9272ef78d2", "name": "Belts"},
        {"id": "8ec6e9cd-9153-4d3c-82e1-635bf5404d4a", "name": "Biker"},
        {"id": "229508e9-3ddf-4f70-8c92-33a3fe8087ad", "name": "Blazers"},
        {"id": "7e1631cc-8854-49b2-a8e2-454aa7e707fa", "name": "Bodies"},
        {"id": "c6488fde-a37a-4325-bc12-80df293d231b", "name": "Bodysuits"},
        {"id": "01649c72-7496-4f08-beaf-7e9f16309fca", "name": "Bomber"},
        {"id": "f3d8bc35-5a6c-4944-9e44-7d292d22bff0", "name": "Bootcut"},
        {"id": "bcf45826-1647-4ea3-9edf-4843da4fbe18", "name": "Boots"},
        {"id": "4a7ad4ab-e50b-4628-ab77-60bc03442960", "name": "Bottoms"},
        {"id": "ae5e2607-0df4-48d3-b39e-9321fe01ede9", "name": "Bow Ties"},
        {"id": "40d8d44f-e191-46e4-b1e2-7dd57a79f897", "name": "Boxers"},
        {"id": "9d5c8fda-f904-4639-b61f-efb3b347061c", "name": "Boyfriend"},
        {"id": "e1094200-79c3-4610-9560-ef88b42f7005", "name": "Bracelets"},
        {"id": "66ed0597-1d7f-47de-957d-948ec3a6a78b", "name": "Bras"},
        {"id": "da9324e3-172b-40f8-a799-694ade74cbd6", "name": "Camis"},
        {"id": "4b7a7c78-912f-4f9b-8cbb-5e26e1e130a0", "name": "Capes"},
        {"id": "bc2ebcef-f7de-4fcc-a391-35fcb2444dd2", "name": "Cardigans"},
        {"id": "79d10a0c-e166-4574-9f96-2e775c679f47", "name": "Clutch"},
        {"id": "1b821b92-f3be-4524-b678-d4ccdfa7762c", "name": "Coats"},
        {"id": "7f114f7a-1923-4916-9f9e-83408876b925", "name": "Cover Ups"},
        {"id": "5c9b9295-8b00-4e56-b0c4-b44db2aecae9", "name": "Cropped"},
        {"id": "008b3c57-c6f2-41e2-ad79-a7342dce0067", "name": "Crop tops"},
        {"id": "85091bb1-3b9f-4368-92d3-411801e3a20d", "name": "Cufflink"},
        {"id": "00c3483e-ef9a-4821-ae3d-e93896d28638", "name": "Dress Shirts"},
        {"id": "dbfdf89c-50bc-421e-8859-a637af17938a", "name": "Earrings"},
        {"id": "d06cebe1-a0f6-4a80-a36a-a8b36db6a3e3", "name": "Electronics"},
        {"id": "6c4458bc-5a65-4e37-a075-a5b6ce1e5d6b", "name": "Flared"},
        {"id": "20d8373d-b5c9-4d9d-b829-ed6d4f1903ef", "name": "Flats"},
        {"id": "16dda158-75a7-490d-bf75-f79ce65c1f31", "name": "Glasses"},
        {"id": "d51a8954-87e3-4841-87a7-86cf434e9fad", "name": "Gloves"},
        {"id": "dfed3a29-3e6a-4885-9bc6-10a24a2b8faf", "name": "Hair Accessories"},
        {"id": "cdfe6005-ec74-4f73-a1a5-17775b19803a", "name": "Hats"},
        {"id": "a1034fe2-6190-4658-9b43-1c632f22ab84", "name": "Heels"},
        {"id": "15047271-e560-4b51-b7ce-6244e089d466", "name": "Hobos"},
        {"id": "2211e301-7525-456a-a41d-4f281ddccc4d", "name": "Hoodies"},
        {"id": "34014842-5bf5-4d4a-9d3a-4a14bd54414e", "name": "Hosiery"},
        {"id": "4f9e44a2-c5da-406e-8411-550315134eb7", "name": "Jackets"},
        {"id": "5a6f2b19-22ef-4da3-8676-9451da280cb5", "name": "Joggers"},
        {"id": "95677162-5f3c-4cb3-8524-5aa5d25bd781", "name": "Keychains"},
        {"id": "f7941d3a-1d22-4cdb-8d67-143639b38e38", "name": "Kimono"},
        {"id": "bfe6b3e3-ba97-47b7-a1be-fe713acc176a", "name": "Leggings"},
        {"id": "f9b789e3-76eb-460e-ada8-8288821a3f63", "name": "Long Sleeves"},
        {"id": "60d7e49a-4d80-480b-b554-085054a6adb2", "name": "Luggage"},
        {"id": "034ef655-bda6-4b2b-83ac-ce26ee40c394", "name": "Maxi Dress"},
        {"id": "16214768-efd5-4882-bce6-72afe70eb16f", "name": "Maxi Skirt"},
        {"id": "0166c236-4e67-4d53-a947-fd0ec7ae5129", "name": "Midi Dress"},
        {"id": "21a1c33f-9634-4f4d-965c-0e2834d19fc3", "name": "Midi Skirt"},
        {"id": "5546f359-e5b9-47a5-ae36-882717bd8ad2", "name": "Mini Dress"},
        {"id": "72e303cf-bca8-4474-86b3-60b9c5cd97f8", "name": "Mini Skirt"},
        {"id": "09b630f9-804b-4dec-a0cb-e08b5d434d8a", "name": "Necklaces"},
        {"id": "32b69c13-7bd3-444e-a89c-409d41e3b2b3", "name": "One Piece"},
        {"id": "8ea7147e-ef67-49c1-9e35-737b68280fe7", "name": "One Piece"},
        {"id": "2218d7d8-4989-4b15-a18d-1478c66d0a3d", "name": "Others"},
        {"id": "16dda158-75a7-490d-bf75-f79ce65c1f30", "name": "Overall"},
        {"id": "0b4fae36-44a5-4f69-8424-208533a17386", "name": "Pants"},
        {"id": "22bd05e0-e27b-4c98-9f65-c9095d133303", "name": "Pants"},
        {"id": "8069ea0f-b32f-4b3b-a48e-1bb1c466e021", "name": "Parka"},
        {"id": "b679dce3-ae73-4385-ab04-572cccd816f2", "name": "Pins"},
        {"id": "9999d087-02c8-42fa-909a-a278a1b3daed", "name": "Polo Shirts"},
        {"id": "3bafe0bd-8096-449d-9fca-3aa22588d087", "name": "Rings"},
        {"id": "44f477e8-fcd1-4629-ae2f-9087472d0839", "name": "Robes"},
        {"id": "7c2c2093-1e32-46e3-be02-e904aa7b2a26", "name": "Sandals"},
        {"id": "0dfff023-d81c-4075-a173-3f1c1cce192e", "name": "Satchel"},
        {"id": "e8dfe216-8b8c-4e4d-86f2-8095807943f3", "name": "Scarves"},
        {"id": "4fb38e3f-7a57-40b0-9aec-081c9ea109d4", "name": "Shape Wear"},
        {"id": "ba762ee0-a7f7-4753-bd75-d41d8e521741", "name": "Shirts"},
        {"id": "c3dc52e2-4f9c-4a13-ac9a-b8b08a631b7b", "name": "Shorts"},
        {"id": "897eb02d-8e57-48c2-a953-ed326df0f52a", "name": "Shoulder"},
        {"id": "699b14a3-105b-4737-a232-1ee96fde4aef", "name": "Skinny"},
        {"id": "e26e9e65-306f-4751-953c-fee6920ed522", "name": "Sleepwear"},
        {"id": "3cb029e9-3264-4ecf-99ed-f23255d4676e", "name": "Sneakers"},
        {"id": "8dfc76e8-d489-4246-a468-4e5fbf6e22c3", "name": "Socks"},
        {"id": "6c735992-b288-4673-b2e2-be95fe72830e", "name": "Sport Bras"},
        {"id": "2f669554-cf81-45a3-bc8c-8b9d0bd13cdd", "name": "Straight"},
        {"id": "16dda158-75a7-490d-bf75-f79ce65c1f29", "name": "Strapless"},
        {"id": "00c3483e-ef9a-4821-ae3d-e93896d28637", "name": "Suits"},
        {"id": "2f823217-e367-4c44-ba42-ee1ed9afbdb3", "name": "Sunglasses"},
        {"id": "51fd2dcb-0cbd-48d8-a6dc-29d614e8094b", "name": "Sweaters"},
        {"id": "c7df57ac-5ef5-49df-8a20-3b229fc14ac8", "name": "Sweatshirts"},
        {"id": "3ffc630c-7429-4645-adf5-04279992337e", "name": "Tanks"},
        {"id": "e1fb35ea-e286-4c02-a17d-76614dc9b9df", "name": "Tees"},
        {"id": "22a9c7f7-c91d-4ff6-ba9d-3fcd675e1395", "name": "Ties"},
        {"id": "eec1e5ce-38d8-4fc6-b11a-bbff299e0531", "name": "Tops"},
        {"id": "c88395e3-5e75-442f-9740-445eb2884ae3", "name": "Totes"},
        {"id": "2292ddd5-c15d-417a-b12c-1f16988941d5", "name": "Training Jackets"},
        {"id": "b244f48e-59cf-4036-b8c3-c93de302c880", "name": "Trench"},
        {"id": "5fab747c-60e3-49ac-84d2-4d9b3b46b18e", "name": "Tunics"},
        {"id": "03526ac9-16ee-4110-8f20-7f6dfcb037dd", "name": "Turtleneck"},
        {"id": "77d17664-cc71-4ebf-9d0c-952e589a5dfc", "name": "Two Piece"},
        {"id": "c5824451-bd26-497a-8179-412506d6f7c5", "name": "Vests"},
        {"id": "a7daa447-7b2e-4895-8ff4-bd6fc9cb8ef3", "name": "Wallets"},
        {"id": "008c031a-a7c5-406e-9843-91099542fe51", "name": "Watches"},
        {"id": "9b6e28eb-ca10-430b-b1eb-e2b8a6f113e3", "name": "Wedges"}
    ]
};

function getSimilarType(id) {
    var type = "Not found";
    constants.similar_type.forEach(function(s) {
        if(s.id === id) {
            type = s.name;
            return false; // return false to stop looping
        }
    });

    return type;
}

function getCategory(id) {
    var category = "Not found";

    constants.category_id.forEach(function(c) {
        if(c.id === id) {
            category = c.name;
            return false;
        }
    });

    return category
}

function getParentCategory(id) {
    var category = "Not found";

    constants.parent_category_id.forEach(function(c) {
        if(c.id === id) {
            category = c.name;
            return false;
        }
    });

    return category
}

module.exports = {
    'getSimilarType': getSimilarType,
    'getCategory': getCategory,
    'getParentCategory': getParentCategory
};