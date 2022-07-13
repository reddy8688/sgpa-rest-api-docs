import{d as s}from"./app.c5d01193.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";const a={},p=s(`<h1 id="new-endpoint" tabindex="-1"><a class="header-anchor" href="#new-endpoint" aria-hidden="true">#</a> New-Endpoint</h1><p>Endpoint to fetch all results links in unordered fashion</p><p><code>GET /new/</code></p><h3 id="usage" tabindex="-1"><a class="header-anchor" href="#usage" aria-hidden="true">#</a> Usage</h3><ol><li>Go here:</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://results-restapi.herokuapp.com/new/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="example" tabindex="-1"><a class="header-anchor" href="#example" aria-hidden="true">#</a> Example</h3><p>Copy and paste this url in a new tab:</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>https://results-restapi.herokuapp.com/new/
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>You would obtain a sample response as such:</p><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token punctuation">[</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;exam_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot; RC/RV B.Tech II Year I Semester (R18) Supplementary Examinations Results&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;release_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;07-JAN-2022&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;http://results.jntuh.ac.in/jsp/SearchResult.jsp?degree=btech&amp;examCode=1496&amp;etype=r17&amp;result=gradercrv&amp;type=rcrvintgrade&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;http://202.63.105.184/results/jsp/SearchResult.jsp?degree=btech&amp;examCode=1496&amp;etype=r17&amp;result=gradercrv&amp;type=rcrvintgrade&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;degree&quot;</span><span class="token operator">:</span> <span class="token string">&quot;btech&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;examCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1496&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;etype&quot;</span><span class="token operator">:</span> <span class="token string">&quot;r17&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gradercrv&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rcrvintgrade&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;exam_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot; RC/RV B.Tech II Year I Semester (R16) Supplementary Examinations Results&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;release_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;07-JAN-2022&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;http://results.jntuh.ac.in/jsp/SearchResult.jsp?degree=btech&amp;examCode=1497&amp;etype=r17&amp;result=gradercrv&amp;type=rcrvintgrade&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;http://202.63.105.184/results/jsp/SearchResult.jsp?degree=btech&amp;examCode=1497&amp;etype=r17&amp;result=gradercrv&amp;type=rcrvintgrade&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;degree&quot;</span><span class="token operator">:</span> <span class="token string">&quot;btech&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;examCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1497&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;etype&quot;</span><span class="token operator">:</span> <span class="token string">&quot;r17&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;gradercrv&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rcrvintgrade&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token punctuation">{</span>
    <span class="token property">&quot;exam_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot; RC/RV B.Tech II Year I Semester (R15) Supplementary Examinations Results&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;release_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;07-JAN-2022&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;links&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token string">&quot;http://results.jntuh.ac.in/jsp/SearchResult.jsp?degree=btech&amp;examCode=1498&amp;etype=rcrv&quot;</span><span class="token punctuation">,</span>
      <span class="token string">&quot;http://202.63.105.184/results/jsp/SearchResult.jsp?degree=btech&amp;examCode=1498&amp;etype=rcrv&quot;</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;degree&quot;</span><span class="token operator">:</span> <span class="token string">&quot;btech&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;examCode&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1498&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;etype&quot;</span><span class="token operator">:</span> <span class="token string">&quot;rcrv&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;id&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">]</span>
...
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br></div></div>`,11);function e(t,o){return p}var l=n(a,[["render",e]]);export{l as default};
