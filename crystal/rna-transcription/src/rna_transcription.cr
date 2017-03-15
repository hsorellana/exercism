# Please implement your solution to rna-transcription in this file
module RnaComplement
  def self.of_dna(chain : String)
    new_chain = ""
    chain.split.each do |l|
      if char == "C" || char == "G"
        if char == "C"
          new_chain.push "G"
        else
          new_chain.push "C"
        end
      else
        if char == "A"
          new_chain.push("T")
        else
          new_chain.push("A")
        end
      end
    end
    # chain.split.each do |char|
    # end
  end
end
