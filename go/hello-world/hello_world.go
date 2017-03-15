package greeting

import "fmt"

const testVersion = 3


// HelloWorld needs a comment documenting it as package does.
func HelloWorld(s string) string {
    
    if len(s) != 0 {
        return fmt.Sprintf("Hello, %s!", s)
    }
    return "Hello, World!"
}