<h4>Unmatchable GCI Records</h4>

<p>
    Our records indicate that one of your expert panels has started the curations below in the GCI, but they have not been entered into the Gene Tracker.  Please document this information in the Gene Tracker so that we can accurately track GCEP activity and precuration/disease-naming decisions.
</p>

<p>
    If you have any questions, please contact us at 
    <a href="mailto:clingentrackerhelp@unc.edu">clingentrackerhelp@unc.edu</a>.
</p>

@php
    $groupedErrors = $notifications->map(function ($item) {
        return $item->data['stream_errors'];
    })
    ->flatten(1)
    ->groupBy(function ($streamError) {
        return $streamError['affiliation']['name'];
    });
@endphp

<ul>
    @foreach ($groupedErrors as $epName => $errors)
        {{-- @php dump($epName); dump($errors->count()) @endphp --}}
        <li>
            Expert Panel: {{$epName}}
            <ul>
                @foreach ($errors as $streamError)
                <li>
                    <a href="https://curation.clinicalgenome.org/curation-central/{{$streamError['message_payload']['report_id']}}/">
                        {{ isset($streamError['gene_model'])
                                ? $streamError['gene_model']['gene_symbol'] 
                                : $streamError['gene'] }} 
                        / {{ isset($streamError['disease_model'])
                                ? $streamError['disease_model']['name'] 
                                : $streamError['condition'] }} 
                        / {{ isset($streamError['moi_model']) 
                            ? $streamError['moi_model']['name']
                            : $streamError['moi'] }}
                    </a>
                    on {{\Carbon\Carbon::parse($streamError['created_at'])->format('Y-m-d')}}
                </li>
                @endforeach
            </ul>
        </li>
    @endforeach
</ul>
