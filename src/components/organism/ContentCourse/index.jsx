import Text from "../../atoms/Text";
import Title from "../../atoms/Title";

export default function ContentCourse() {
  return (
    <div>
      <Title customStyle="text-2xl">What is javascript</Title>
      <Text customStyle="mt-4">
        JavaScript is a scripting or programming language that allows you to
        implement complex features on web pages — every time a web page does
        more than just sit there and display static information for you to look
        at — displaying timely content updates, interactive maps, animated 2D/3D
        graphics, scrolling video jukeboxes, etc. — you can bet that JavaScript
        is probably involved. It is the third layer of the layer cake of
        standard web technologies, two of which (HTML and CSS) we have covered
        in much more detail in other parts of the Learning Area.
      </Text>
      <ul className="list-disc list-inside px-4 mt-8">
        <li>
          HTML is the markup language that we use to structure and give meaning
          to our web content, for example defining paragraphs, headings, and
          data tables, or embedding images and videos in the page.
        </li>
        <li>
          CSS is a language of style rules that we use to apply styling to our
          HTML content, for example setting background colors and fonts, and
          laying out our content in multiple columns.
        </li>
        <li>
          JavaScript is a scripting language that enables you to create
          dynamically updating content, control multimedia, animate images, and
          pretty much everything else. (Okay, not everything, but it is amazing
          what you can achieve with a few lines of JavaScript code.)
        </li>
      </ul>
      <h1 className="mt-8 mb-4 text-2xl font-bold">
        What is JavaScript doing on your page?
      </h1>
      <Text>
        Here we will actually start looking at some code, and while doing so,
        explore what actually happens when you run some JavaScript in your page.
        Lets briefly recap the story of what happens when you load a web page in
        a browser (first talked about in our How CSS works article). When you
        load a web page in your browser, you are running your code (the HTML,
        CSS, and JavaScript) inside an execution environment (the browser tab).
        This is like a factory that takes in raw materials (the code) and
        outputs a product (the web page).
      </Text>
      <Text customStyle={"mt-8"}>
        Interpreted versus compiled code You might hear the terms interpreted
        and compiled in the context of programming. In interpreted languages,
        the code is run from top to bottom and the result of running the code is
        immediately returned. You dont have to transform the code into a
        different form before the browser runs it. The code is received in its
        programmer-friendly text form and processed directly from that. Compiled
        languages on the other hand are transformed (compiled) into another form
        before they are run by the computer. For example, C/C++ are compiled
        into machine code that is then run by the computer. The program is
        executed from a binary format, which was generated from the original
        program source code. JavaScript is a lightweight interpreted programming
        language. The web browser receives the JavaScript code in its original
        text form and runs the script from that. From a technical standpoint,
        most modern JavaScript interpreters actually use a technique called
        just-in-time compiling to improve performance; the JavaScript source
        code gets compiled into a faster, binary format while the script is
        being used, so that it can be run as quickly as possible. However,
        JavaScript is still considered an interpreted language, since the
        compilation is handled at run time, rather than ahead of time. There are
        advantages to both types of language, but we wont discuss them right
        now. Server-side versus client-side code You might also hear the terms
        server-side and client-side code, especially in the context of web
        development. Client-side code is code that is run on the users computer
        — when a web page is viewed, the pages client-side code is downloaded,
        then run and displayed by the browser. In this module we are explicitly
        talking about client-side JavaScript. Server-side code on the other hand
        is run on the server, then its results are downloaded and displayed in
        the browser. Examples of popular server-side web languages include PHP,
        Python, Ruby, ASP.NET, and even JavaScript! JavaScript can also be used
        as a server-side language, for example in the popular Node.js
        environment — you can find out more about server-side JavaScript in our
        Dynamic Websites  Server-side programming topic. Dynamic versus static
        code The word dynamic is used to describe both client-side JavaScript,
        and server-side languages — it refers to the ability to update the
        display of a web page/app to show different things in different
        circumstances, generating new content as required. Server-side code
        dynamically generates new content on the server, e.g. pulling data from
        a database, whereas client-side JavaScript dynamically generates new
        content inside the browser on the client, e.g. creating a new HTML
        table, filling it with data requested from the server, then displaying
        the table in a web page shown to the user. The meaning is slightly
        different in the two contexts, but related, and both approaches
        (server-side and client-side) usually work together. A web page with no
        dynamically updating content is referred to as static — it just shows
        the same content all the time.
      </Text>
    </div>
  );
}
