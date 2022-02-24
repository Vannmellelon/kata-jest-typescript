import {elasticize} from "./index";

it("should give kaayyyaak for kayak", function() {
    const word = "kayak";
    const elasticizedWord = "kaayyyaak";
    expect(elasticize(word)).toEqual<string>(elasticizedWord);
})